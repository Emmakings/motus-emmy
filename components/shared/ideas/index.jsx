"use client";
import React from "react";
import styles from "./ideas.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import Link from "next/link";

export default function Ideas() {
  const router = useRouter();

  return (
    <div className={styles.ideas}>
      <div className={styles.description}>
        <h1>
          Transform Ideas into Reality: Collaborate Seamlessly and Brainstorm
          with Like-minded People.
        </h1>
        <p>
          Don't let limited implementation hinder your progress any longer. Take
          the first steps towards realizing your dreams by connecting with link
          minded people to bring your ideas into reality.
        </p>
        <button onClick={() => router.push("/sign-in")}>Share Ideas</button>
        {/* <Link href={'/sign-in'}>Login</Link> */}
      </div>

      <Image
        className={styles.image}
        src="/images/hero-image.svg"
        alt=""
        width={600}
        height={500}
      />
    </div>
  );
}
