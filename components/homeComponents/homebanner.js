import Image from "next/image";
import React from "react";
import styles from "./homebanner.module.css";
const HomeBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.shading}>
        <img className={styles.bannerimg}
          src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/index/bg.jpg"
          alt=""
          id="index_banner"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
