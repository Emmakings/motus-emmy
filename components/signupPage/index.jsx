"use client"
import React from 'react'
import styles from './signup.module.css'
import Image from 'next/image'
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
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
          <h3>Create your account</h3>
        </div>

        <div className={styles.googleAuth}>
          <button>Sign up with Google</button>
          <div class={styles.divider}>
            <span></span>
            <span>OR</span>
            <span></span>
          </div>
        </div>

        <form>
          <div className={styles.details}>
            <label for="name">Name</label>
            <input required="" placeholder="Your Name" type="text" />
          </div>

          <div className={styles.details}>
            <label for="email">Email</label>
            <input required="" placeholder="your@gmail.com" type="email" />
          </div>

          <div className={styles.details}>
            <label for="password">Password</label>
            <input
              required=""
              placeholder="min. 8 characters"
              type="password"
            ></input>
          </div>

          <button type="submit" class={styles.button} onClick={() => router.push("/sign-in")}>
            Sign Up
          </button>
        </form>

        <div class={styles.loginOption}>
          <p>Have an account?</p>
          <a href="/sign-in">Login</a>
        </div>
      </div>
    </div>
  )
}