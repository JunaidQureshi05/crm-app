import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./AppLayout.module.scss";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Menu, User, X } from "lucide-react";
import cx from "classnames";
import useProfile from "../../auth/hooks/useProfile";
import { sideBarLinks } from "../../routes/config";
import Button from "../../design/components/Button";
import { ButtonVariant } from "../../design/types";

export default function AppLayout() {
  const MIN_WIDTH = 200;
  const MAX_WIDTH = 520;

  // restore preferences
  const [open, setOpen] = useState(() =>
    JSON.parse(localStorage.getItem("sidebar-open") || "true")
  );
  const [width, setWidth] = useState(
    () => Number(localStorage.getItem("sidebar-width")) || 280
  );

  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startWidthRef = useRef(width);

  const navigate = useNavigate();

  useEffect(() => {
    function onMove(e: MouseEvent) {
      if (!draggingRef.current) return;
      const dx = e.clientX - startXRef.current;
      let next = startWidthRef.current + dx;
      next = Math.max(MIN_WIDTH, Math.min(MAX_WIDTH, next));
      setWidth(next);
    }
    function onUp() {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      document.body.style.cursor = "auto";
      document.body.style.userSelect = "auto";
      localStorage.setItem("sidebar-width", String(width));
    }
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [width]);

  function onDragHandleMouseDown(e: React.MouseEvent) {
    draggingRef.current = true;
    startXRef.current = e.clientX;
    startWidthRef.current = width;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  }

  const { profile, loading } = useProfile();

  const links = useMemo(() => {
    if (loading) return [];
    return sideBarLinks.filter((item) =>
      item.roles.some((role) => profile?.roles?.includes(role))
    );
  }, [profile, loading]);

  const handleToggle = () => {
    setOpen((s) => {
      localStorage.setItem("sidebar-open", String(!s));
      return !s;
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <Button
            aria-label="Toggle drawer"
            aria-expanded={open}
            variant={ButtonVariant.primary}
            onClick={handleToggle}
            label={open ? <X size={18} /> : <Menu size={18} />}
          />
          <h1 className={styles.appTitle}>⚡ CRM App</h1>
        </div>
        <div className={styles.welcome}>
          Welcome, <span>{profile?.firstName || "Guest"}</span>
        </div>
      </header>

      {/* Main Layout */}
      <div className={styles.main}>
        <aside
          className={cx(styles.drawer, { [styles.drawerCollapsed]: !open })}
          style={{
            width: open ? width : 72,
            transition: draggingRef.current ? "none" : "width 0.25s ease",
          }}
        >
          {/* Navigation */}
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      cx(styles.link, { [styles.linkActive]: isActive })
                    }
                    title={!open ? l.label : undefined}
                  >
                    {l.icon && <l.icon size={18} />}
                    {open && (
                      <span className={styles.linkLabel}>{l.label}</span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer with Profile */}
          <div className={styles.drawerFooter}>
            {open && (
              <div className={styles.profileSection}>
                <div className={styles.profileInfo}>
                  <div className={styles.iconContainer}>
                    <User size={20} style={{ color: "#fff" }} />
                  </div>
                  <div className={styles.profileDetails}>
                    <div className={styles.profileName}>
                      {profile?.firstName}
                    </div>
                    {profile?.email && (
                      <div className={styles.profileEmail}>{profile.email}</div>
                    )}
                  </div>
                </div>
                <Button
                  label="Logout"
                  variant={ButtonVariant.primary}
                  onClick={handleLogout}
                />
              </div>
            )}
          </div>

          {/* Drag Handle */}
          {open && (
            <div
              className={styles.dragHandle}
              onMouseDown={onDragHandleMouseDown}
            />
          )}
        </aside>

        {/* Main content */}
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
