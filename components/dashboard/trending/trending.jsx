import React from "react";
import styles from "./trending.module.css";

export default function TrendingIdeas() {
  return (
    <div className={styles.trending}>
      <div className={styles.container}>
        <div className={styles.flex1}>
          <div className={styles.profile}></div>

          <div className={styles.name}>
            <h5>Emmykings</h5>
            <p>Posted at 08/10/23</p>
          </div>
        </div>

        <p className={styles.info}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          est distinctio labore laborum dolore fugit corrupti voluptatem quasi
          facilis atque.
        </p>
      </div>

      <div className={styles.engagement}>
        <div className={styles.icons}>
          <svg
            stroke="currentColor"
            fill="gray"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="Aside_icon__7hfIM"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
          </svg>
          <p>250</p>
        </div>

        <div className={styles.icons}>
          <svg
            stroke="currentColor"
            fill="gray"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="Aside_icon__7hfIM"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"></path>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"></path>
          </svg>
          <p>300</p>
        </div>
      </div>
    </div>
  );
}
