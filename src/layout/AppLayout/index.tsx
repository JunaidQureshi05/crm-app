import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./AppLayout.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { Menu, User, X } from "lucide-react";
import cx from "classnames";
import useProfile from "../../auth/hooks/useProfile";
import { sideBarLinks } from "../../routes/config";
import Button from "../../design/components/Button";
import { ButtonVariant } from "../../design/types";

export default function AppLayout() {
  const MIN_WIDTH = 200;
  const MAX_WIDTH = 520;

  const [open, setOpen] = useState(true);
  const [width, setWidth] = useState(280);
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startWidthRef = useRef(width);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      if (!draggingRef.current) return;
      const dx = e.clientX - startXRef.current;
      let next = startWidthRef.current + dx;
      next = Math.max(MIN_WIDTH, Math.min(MAX_WIDTH, next));
      setWidth(next);
    }
    function onUp() {
      draggingRef.current = false;
      document.body.style.cursor = "auto";
      document.body.style.userSelect = "auto";
    }
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  function onDragHandleMouseDown(e: React.MouseEvent) {
    draggingRef.current = true;
    startXRef.current = e.clientX;
    startWidthRef.current = width;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  }

  const { profile, loading } = useProfile();

  const links = useMemo(() => {
    console.log(profile);
    return sideBarLinks.filter((item) =>
      item.roles.some((role) => profile?.roles?.includes(role))
    );
  }, [profile]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <Button
            aria-label="Toggle drawer"
            variant={ButtonVariant.info}
            onClick={() => setOpen((s) => !s)}
            label={open ? <X size={18} /> : <Menu size={18} />}
          />
          <h1 style={{ fontSize: 18, fontWeight: 600 }}>CRM App</h1>
        </div>
        <div style={{ fontSize: 13, color: "#6b7280" }}>
          Welcome, {profile?.firstName}
        </div>
      </header>

      <div className={styles.main}>
        <aside
          className={cx(styles.drawer, { [styles.drawerCollapsed]: !open })}
          style={{ width: open ? width : 72 }}
        >
          <nav className={styles.nav}>
            {open && (
              <ul className={styles.navList}>
                {links.map((l) => (
                  <li key={l.to}>
                    <NavLink
                      to={l.to}
                      className={({ isActive }) =>
                        cx(styles.link, { [styles.linkActive]: isActive })
                      }
                    >
                      <span
                        style={{ width: 18, textAlign: "center", fontSize: 12 }}
                      >
                        •
                      </span>
                      <span
                        style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                      >
                        {l.label}
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </nav>

          <div className={styles.drawerFooter}>
            {/* Profile Section */}
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
                  onClick={() => console.log("Logout clicked")}
                />
              </div>
            )}
          </div>

          <div
            className={styles.dragHandle}
            onMouseDown={onDragHandleMouseDown}
          />
        </aside>

        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
