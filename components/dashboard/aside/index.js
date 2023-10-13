import React from "react";
import styles from './aside.module.css'

export default function Aside() {
  return (
    <aside className={styles.aside}>
      <div className={styles.asideContent}>
        <p className={styles.asideText}>
          <svg
            stroke="currentColor"
            fill="gray"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="Aside_icon__7hfIM"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
          </svg>
        </p>
        <div>
          <p>Shared Ideas</p>
          <p>15</p>
        </div>
      </div>

      <div className={styles.asideContent}>
        <p className={styles.asideText}>
          <svg
            stroke="currentColor"
            fill="gray"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="Aside_icon__7hfIM"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"></path>
          </svg>
        </p>
        <div>
          <p>Commented Ideas</p>
          <p>14</p>
        </div>
      </div>

      <div className={styles.asideContent}>
        <p className={styles.asideText}>
          <svg
            stroke="currentColor"
            fill="gray"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="Aside_icon__7hfIM"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
          </svg>
        </p>
        <div>
          <p>Voted Ideas</p>
          <p>5</p>
        </div>
      </div>
    </aside>
  );
}
