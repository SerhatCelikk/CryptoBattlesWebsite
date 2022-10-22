import React, { useState, useRef, useEffect } from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <img className={styles.logoimg}
          src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/logo.png"
          alt="Street Machine"
          id="logo"
        />
      </div>
      <div className={styles.media}>
        <ul className={styles.mediaul}>
          <li className={styles.mediali}>
            <a className={styles.mediaa} href="https://twitter.com/CBattlesGame" target="_blank">
              <img className={styles.mediaimg} src="/twitterwhite.png"  />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.copy}>
        <p className={styles.copyp}>© 2022 Cyber Battles</p>
      </div>
    </div>
  );
}

export default Footer;
