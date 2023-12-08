"use client";
import React, { useState } from "react";
import styles from "./addIdea.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddIdea() {
  const [idea, setIdea] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (idea.length === 0) {
      toast.info("Have No idea?", {
        autoClose: 3000,
        position: "top-center",
        pauseOnHover: false,
      });
      return setIsLoading(false);
    }

    const data = {
      creator: {
        name: "Emerald Agunu",
        email: "emeraldkings60@gmail.com",
        userId: "6523e4201cd40622d3f3161d",
      },
      content: idea,
      votes: 0,
      comments: [],
    };

    const response = await fetch("/api/ideas", {
      method: "POST",
      contentType: "Application/json",
      body: JSON.stringify(data),
    });
    ...
    if (response.ok) {
      setIdea("");
      toast.success("Nice Idea !", {
        autoClose: 3000,
        position: "top-center",
        pauseOnHover: false,
      });
      return setIsLoading(false);
    } else {
       toast.error("Idea ERROR !", {
        autoClose: 3000,
        position: "top-center",
        pauseOnHover: false,
      });
      return setIsLoading(false)
    }
  };

  return (
    <div className={styles.addIdea}>
      <h1 className={styles.h1}>Add Ideas</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} for="content">
          What's on your mind?
        </label>

        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          className={styles.textarea}
          placeholder="Enter your idea here..."
        ></textarea>

        <button disabled={isLoading} className={styles.button}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
        <ToastContainer />
      </form>
    </div>
  );
}
