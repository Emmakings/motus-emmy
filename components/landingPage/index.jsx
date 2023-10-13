"use client"
import React from 'react'
import styles from './landingPage.module.css'
import Ideas from '../shared/ideas'
import Features from '../shared/features'

export default function LandingPage() {
  return (
    <section className={styles.LandingPage}>
      <Ideas />
      <Features />
    </section>
  )
}
