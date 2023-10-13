import styles from "./page.module.css";
import LandingPage from "@/components/landingPage";

export default function Home() {
  return (
    <main className={styles.main}>
      <LandingPage />
    </main>
  );
}
