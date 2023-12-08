import React from "react";
import { format } from "date-fns";
import styles from "./current.module.css";
import Link from "next/link";
import { MdComment } from "react-icons/md";
import { MdOutlineVerified } from "react-icons/md";

export default function CurrentIdeas({ idea }) {
  console.log(idea);
  return (
    <div className={styles.trending}>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div className={styles.flex1}>
            <div className={styles.profile}></div>

            <div className={styles.name}>
              <h5>{idea?.creator?.name}</h5>
              <p>Posted at {format(new Date(idea?.postedAt), "dd/MM/yyyy")}</p>
            </div>
          </div>
          <Link href={`/dashboard/my-ideas/${idea?._id}`}>Read more...</Link>
        </div>

        <p className={styles.info}>{idea?.content}</p>
      </div>

      <div className={styles.engagement}>
        <div className={styles.icons}>
          <MdOutlineVerified />
          <p>{idea?.votes}</p>
        </div>

        <div className={styles.icons}>
          <MdComment />
          <p>{idea?.comments.length}</p>
        </div>
      </div>
    </div>
  );
}
