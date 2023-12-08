"use client"
import React from "react";
import styles from "./login.module.css";
import Image from "next/image";
// import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react"
import Link from "next/link"

export default function LoginPage() {
  // const router = useRouter();
  return (
    <div className={styles.login}>
      <div className={styles.loginPage}>
        <div className={styles.logo}>
          <Image
            src="/images/motus.svg"
            alt="motus icon"
            height={80}
            width={80}
          />
          <h3>Welcome, login</h3>
        </div>

        <div className={styles.googleAuth}>
          <button>Sign in with Google</button>
          <div class={styles.divider}>
            <span></span>
            <span>OR</span>
            <span></span>
          </div>
        </div>

        <form className={styles.form}>
          <div className={styles.details}>
            <label for="email" className={styles.label}>Email</label>
            <input required="" placeholder="your@gmail.com" type="email" />
          </div>

          <div className={styles.details}>
            <label for="password" className={styles.label}>Password</label>
            <input
              required=""
              placeholder="min. 8 characters"
              type="password"
            ></input>
          </div>

          
          {/* <Link href={'/dashboard'}>
            <button class={styles.button}>
              <h4>Log in</h4>
            </button>
          </Link>  */}

          <button className={styles.button} onClick={() => signIn()}>Log in</button>
          
          {/* <button class={styles.button} onClick={() => router.push("/dashboard")}>
            Log in
          </button> */}
        </form>

        <div class={styles.loginOption}>
          <p>Don't have an account?</p>
          <a href="/sign-up">Sign up</a>
        </div>
      </div>
    </div>
  );
}
