"use client"
import React from "react";
import styles from "./dashboard.module.css";
import TrendingIdeas from "./trending/trending";
import CurrentIdeas from "./current/current";
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Dashboard() {
  const { data, error, isValidating, isLoading } = useSWR('/api/ideas', fetcher, { refreshInterval: 1000 })
  console.log(data?.ideas);
  console.log(error);
  console.log(isLoading);
   
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
          {data?.ideas.map((idea) => <CurrentIdeas idea={idea} key={idea._id}/>)}
        </div>
      </section>
    </div>
  );
}
