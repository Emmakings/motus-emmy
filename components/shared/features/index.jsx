import React from "react";
import styles from "./features.module.css";

export default function Features() {
  return (
    <div className={styles.features}>
      <div className={styles.content}>
        <h3>Features</h3>
        <div className={styles.items}>
          <div>
            <p className={styles.pImage}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.8492 11.8051L17.1421 11.098L7.24264 20.9975H3V16.7549L14.3137 5.44114L19.9706 11.098C20.3611 11.4885 20.3611 12.1217 19.9706 12.5122L12.8995 19.5833L11.4853 18.1691L17.8492 11.8051ZM18.5563 2.61272L21.3848 5.44114C21.7753 5.83167 21.7753 6.46483 21.3848 6.85536L19.9706 8.26957L15.7279 4.02693L17.1421 2.61272C17.5327 2.22219 18.1658 2.22219 18.5563 2.61272Z"></path>
              </svg>
            </p>
            <h4>IDEAS</h4>
            <p>
              Share your ideas with like minded people. Ideas are the seeds of
              innovation that blossom into extraordinary realities
            </p>
          </div>

          <div>
            <p className={styles.pImage}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z"></path>
              </svg>
            </p>
            <h4>COMMENT</h4>
            <p>
              Where thoughts intertwine, perspectives ignite, and conversations
              bloom like wildflowers of understanding.
            </p>
          </div>

          <div>
            <p className={styles.pImage}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 256 256"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M178.59,90.22,128,119.43,77.41,90.22a4,4,0,0,1,0-6.93l44.35-25.61a12.48,12.48,0,0,1,12.48,0l44.35,25.61A4,4,0,0,1,178.59,90.22ZM64,107.88v49.55a13,13,0,0,0,6.42,11.24L114,193.84a4,4,0,0,0,6-3.46V133.29L70,104.42A4,4,0,0,0,64,107.88Zm128,49.55V107.88a4,4,0,0,0-6-3.46l-50,28.87v57.09a4,4,0,0,0,6,3.46l43.57-25.17A13,13,0,0,0,192,157.43ZM224,40H184a8,8,0,0,0,0,16h32V88a8,8,0,0,0,16,0V48A8,8,0,0,0,224,40ZM72,200H40V168a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H72a8,8,0,0,0,0-16Zm152-40a8,8,0,0,0-8,8v32H184a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V168A8,8,0,0,0,224,160ZM32,96a8,8,0,0,0,8-8V56H72a8,8,0,0,0,0-16H32a8,8,0,0,0-8,8V88A8,8,0,0,0,32,96Z"></path>
              </svg>
            </p>
            <h4>VOTE</h4>
            <p>
              Vote on other people ideas. Empowering voices, shaping tomorrow,
              one choice at a time, united in progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
