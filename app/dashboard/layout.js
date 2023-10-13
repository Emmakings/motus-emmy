import Aside from "@/components/dashboard/aside";
import styles from './layout.module.css'
import Navigation from "@/components/dashboard/navigation";

export default function DashboardLayout({
    children, 
  }) {
    return (
      <section className={styles.layout}>
        <Navigation />
        <div className={styles.section}>{children}</div>
        <Aside />
      </section>
    )
  }