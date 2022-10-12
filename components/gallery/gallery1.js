import React from "react";
import styles from "./gallery1.module.css";

const Gallery1 = () => {
  return (
    <div >
      <div class="grid-rows-5 gap-0 place-content-center w-screen">
        <div className={styles.backgroundImage}>
          <div >
            <p className={styles.title}>Gallery</p>
          </div>
        </div>
        <div className={styles.backgroundcolor}>xxx</div>
        <div className={styles.backgroundcolor}>xxx</div>
        <div className={styles.backgroundcolor}>xxx</div>
        <div className={styles.backgroundcolor}>xxx</div>
      </div>
    </div>
  );
};

export default Gallery1;
