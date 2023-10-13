"use client";
import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <Image
        className={styles.logo}
        src="/images/motus.svg"
        alt="motus icon"
        height={50}
        width={50}
        onClick={() => router.push("/")}
      />

      <button className={styles.button} onClick={() => router.push("/sign-in")}>
        Share Ideas
      </button>
    </header>
  );
}
