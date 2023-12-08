import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function raFooter() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image
            src="/images/motus-white.svg"
            alt="motus icon"
            height={80}
            width={80}
          />

          <div className={styles.info}>
            <h2>Motus</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
              itaque officia fuga sequi inventore necessitatibus?
            </p>
          </div>
        </div>

        <div className={styles.links}>
          <h3>Helpful Links</h3>
          <ul>
            <li>Lorem, ipsum dolor.</li>
            <li>Consectetur adipisicing elit.</li>
            <li>Autem nisi est voluptate.</li>
            <li>Quod deserunt porro quia.</li>
            <li>Totam, soluta in. Id dignissimos</li>
          </ul>
        </div>

        <div className={styles.socials}>
          <a href="https://m.facebook.com/mma.king.501">
            <ImFacebook2 className={styles.twitter}/>
          </a>

          <a href="https://twitter.com/EMMYK1NGS">
            <FaXTwitter className={styles.twitter} />
          </a>

          <a href="https://tiktok.com/@emmykings.ff">
            <FaTiktok  className={styles.twitter} />
          </a>

          <a href="https://instagram.com/emmy.king.s">
            <FaInstagram  className={styles.twitter} />
          </a>

        </div>
      </div>

      <p className={styles.developer}>Desgined and developed by Emmykings</p>
    </div>
  );
}
