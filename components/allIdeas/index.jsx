"use client";
import React from "react";
import styles from "./allIdeas.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CurrentIdeas from "../dashboard/current/current";
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function AllIdeas() {
  const { data, error, isValidating, isLoading } = useSWR('/api/ideas', fetcher, { refreshInterval: 1000 })
  const router = useRouter();

  return (
    <div>
      <section className={styles.section}>
        <h2>ALL IDEAS</h2>
        <button
          onClick={() => router.push("/dashboard/my-ideas/add")}
          className={styles.button}
        >
          <Image
            src="/images/add.png"
            alt="add button"
            width={25}
            height={25}
          />
          <p>Add New Idea</p>
        </button>
      </section>
      {data?.ideas.map((idea) => <CurrentIdeas idea={idea} key={idea._id}/>)}
    </div>
  );
}
