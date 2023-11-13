"use client";
import React from "react";
import styles from "./allIdeas.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AllIdeas() {
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
    </div>
  );
}
