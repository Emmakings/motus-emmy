import React from 'react'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.notFoundContent}>
        <h1>404</h1>
        <div className={styles.info}>
          <h3>Page not Found</h3>
          <p>The page you are looking for doesn't exist or has been moved. Please go back to the homepage.</p>
          <a href="/">
            <button>Go back Home</button>
          </a>
        </div>
      </div>
    </div>
  )
}
