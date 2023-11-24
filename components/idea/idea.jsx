"use client";

import React, { useState } from "react";
import styles from "./idea.module.css";
import useSWR from "swr";
import { format } from "date-fns";
import { useParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function AddMyIdea() {
  const [comment, setComment] = useState("");
  const params = useParams();
  const { data, error, isValidating, isLoading } = useSWR(
    `/api/ideas/${params?.ideaId}`,
    fetcher,
    { refreshInterval: 1000 }
  );

  console.log(comment);

  const handleSubmitComment = async (e) => {
    e.preventDefault();

    const data = {
      content: comment,
      commentor: "Excel",
    };

    const response = await fetch(`/api/ideas/${params?.ideaId}/comment`, {
      method: "PATCH",
      contentType: "Application/json",
      body: JSON.stringify({ ...data }),
    });
    console.log(response);

    if (response.ok) {
      setComment("");
      toast.success("Nice Idea !", {
        autoClose: 3000,
        position: "top-center",
        pauseOnHover: false,
      });
      // return setIsLoading(false);
    } else {
       toast.error("Idea ERROR !", {
        autoClose: 3000,
        position: "top-center",
        pauseOnHover: false,
      });
      // return setIsLoading(false)
    }
  };

  return (
    <div>
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.container1}>
            <div className={styles.flex1}>
              <div className={styles.profile}></div>

              <div className={styles.name}>
                <h5>{data?.ideas?.creator?.name}</h5>
                <p>
                  Posted at{" "}
                  {data
                    ? format(new Date(data?.ideas?.postedAt), "dd/MM/yyyy")
                    : "loading..."}
                </p>
              </div>
            </div>
            <p className={styles.idea}>{data?.ideas?.content}</p>
          </div>
        </section>
        <section className={styles.addComment}>
          <h2 className={styles.h2}>Add Comment</h2>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className={styles.textarea}
            placeholder="Write a comment!"
          ></textarea>
          <button onClick={handleSubmitComment} className={styles.button}>
            Submit
          </button>
        </section>

        <section className={styles.otherComments}>
          <h2 className={styles.h2}>Comments</h2>

          {data?.ideas?.comments.map((comment, index) => (
            <div key={index} className={styles.comment}>
              <div className={styles.flex1}>
                <div className={styles.profile}></div>

                <div className={styles.name}>
                  <h5>{comment?.commentor}</h5>
                  <p>
                    Posted at{" "}
                    {format(new Date(comment?.commentedDate), "dd/MM/yyyy")}
                  </p>
                </div>
              </div>
              <p>{comment?.content}</p>
            </div>
          ))}
        </section>
      </main>
      <ToastContainer />
    </div>
  );
}
