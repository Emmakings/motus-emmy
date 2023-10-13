import React from "react";
import styles from "./current.module.css";

export default function CurrentIdeas() {
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
        <div>
          {/* <svg></svg> */}
          <p>250</p>
        </div>

        <div>
          {/* <svg></svg> */}
          <p>300</p>
        </div>
      </div>
    </div>
  );
}
