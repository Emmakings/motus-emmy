"use client";
import React, { useState } from "react";
import styles from "./signup.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react"

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log("Name: " + name);
  // console.log("Email: " + email);
  // console.log("Password: " + password);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,  
    };

  const Response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    })

    signIn("credentials", {
      redirect: false,
      name,
      email,
      password
    })
    handleClearFields()

    if (Response.ok) {
      alert("user created")
    } else {
      alert("error")
    }
  };


  const handleClearFields = () => {
    setName ('')
    setEmail ('')
    setPassword ('')
  }

  const handleNameIpnut = (e) => {
    setName(e.target.value);
  };

  const handleEmailIpnut = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordIpnut = (e) => {
    setPassword(e.target.value);
  };


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

        <form onSubmit={handleFormSubmit}>
          <div className={styles.details}>
            <label for="name" className={styles.label}>Name</label>
            <input
              value={name}
              onChange={(e) => handleNameIpnut(e)}
              required=""
              placeholder="Your Name"
              type="text"
            />
          </div>

          <div className={styles.details}>
            <label for="email" className={styles.label}>Email</label>
            <input
              value={email}
              onChange={(e) => handleEmailIpnut(e)}
              required=""
              placeholder="your@gmail.com"
              type="email"
            />
          </div>

          <div className={styles.details}>
            <label for="password" className={styles.label}>Password</label>
            <input
              value={password}
              onChange={(e) => handlePasswordIpnut(e)}
              required=""
              placeholder="min. 8 characters"
              type="password"
            ></input>
          </div>

          <button
            type="submit"
            class={styles.button}
          >
            Sign Up
          </button>
        </form>

        <div class={styles.loginOption}>
          <p>Have an account?</p>
          <a href="/sign-in">Login</a>
        </div>
      </div>
    </div>
  );
}
