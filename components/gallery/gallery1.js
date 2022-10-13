import React from "react";
import styles from "./gallery.module.css";


const Gallery1 = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.title}>
        <span className={styles.texttitle} >Gallery</span>
      </div>
      <div >
      <img className={styles.bgimg}
              
              src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/gallery/bg.png"
             
            ></img>
      </div>
    </div>
  );
};

export default Gallery1;
