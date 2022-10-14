import React from "react";
import styles from "./gallery.module.css";


const Gallery2 = () => {
  return (
    <div className={styles.main}>
    <div className={styles.combine}>
        <div className={styles.area1} >
            <img lassName={styles.img1}src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/gallery/img.png"/>
        </div>

        <div className={styles.area2} >
            <div className={styles.gallery2}>
                <img lassName={styles.img2} src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/gallery/02.jpg" />
                <img lassName={styles.img2} src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/gallery/03.jpg"/>
            </div>

            <div className={styles.gallery3}>
                <ul className={styles.ul3} >
                  <li className={styles.li3} >
                    <img className={styles.img3} src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/gallery/A1.png" />
                  </li>
                  <li className={styles.li3}>
                    <img className={styles.img3} src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/gallery/A2.png" />
                  </li>
                  <li className={styles.li3}>
                    <img className={styles.img3} src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/gallery/A3.png" />
                  </li>
                  <li className={styles.li3}>
                    <img className={styles.img3} src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/gallery/A4.png" />
                  </li>
                </ul>
            </div>
        </div>

        <div className={styles.area3}>
            <div className={styles.gallery4}>
                <ul className={styles.ul4} >
                  <li className={styles.li4}>
                    <img className={styles.img4} src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/gallery/B1.png" />
                  </li>
                  <li className={styles.li4}>
                    <img className={styles.img4} src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/gallery/B2.png" />
                  </li>
                  <li className={styles.li4}>
                    <img className={styles.img4} src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/gallery/B3.png" />
                  </li>
                  <li className={styles.li4}>
                    <img className={styles.img4} src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/gallery/B4.png" />
                  </li>

                  <li className={styles.li4}>
                    <img className={styles.img4} src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/gallery/B5.png" />
                  </li>
                  <li className={styles.li4}>
                    <img className={styles.img4} src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/gallery/B6.png" />
                  </li>
                  <li className={styles.li4} >
                    <img className={styles.img4} src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/gallery/B7.png" />
                  </li>
                  <li className={styles.li4}>
                    <img className={styles.img4} src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/gallery/B8.png" />
                  </li>
                </ul>
            </div>
        </div>

    </div>
  </div>


  );
};

export default Gallery2;