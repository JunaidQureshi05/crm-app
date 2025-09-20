import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css"; // 👈 import module css

const HomePage = () => {
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    const user = {
      firstName: "Juned",
      lastName: "Ahmad",
      email: "juned@example.com",
      roles: ["admin"],
    };
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/dashboard");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to HomePage 🎉</h1>
      <p className={styles.subtext}>
        Manage your account, explore features, and jump right into your
        dashboard.
      </p>
      <button className={styles.button} onClick={handleGoToDashboard}>
        Go to Dashboard
      </button>
    </div>
  );
};

export default HomePage;
