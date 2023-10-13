"use client"
import React from "react";
import styles from "./dashboard.module.css";
import TrendingIdeas from "./trending/trending";
import CurrentIdeas from "./current/current";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <section className={styles.section}>
        <h2>Trending Ideas</h2>
        <div className={styles.flex1}>
          <TrendingIdeas />
          <TrendingIdeas />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Current Ideas</h2>
        <div className={styles.flex2}>
          <CurrentIdeas />
          <CurrentIdeas />
          <CurrentIdeas />
          <CurrentIdeas />
          <CurrentIdeas />
        </div>
      </section>
    </div>
  );
}
