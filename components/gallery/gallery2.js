import React from "react";
import styles from "./gallery.module.css";


const Gallery2 = () => {
  return (
    <div className={styles.main}>
    <div >
        <div className={styles.area1} >
            <img src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/gallery/img.png"/>
        </div>

        <div className={styles.area2} >
            <div >
                <img src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/gallery/02.jpg" />
                <img src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/gallery/03.jpg"/>
            </div>

            <div >
                <ul >
                  <li >
                    <img src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/gallery/A1.png" />
                  </li>
                  <li >
                    <img src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/gallery/A2.png" />
                  </li>
                  <li >
                    <img src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/gallery/A3.png" />
                  </li>
                  <li>
                    <img src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/gallery/A4.png" />
                  </li>
                </ul>
            </div>
        </div>

        <div className={styles.area3}>
            <div>
                <ul >
                  <li >
                    <img src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/gallery/B1.png" />
                  </li>
                  <li >
                    <img src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/gallery/B2.png" />
                  </li>
                  <li >
                    <img src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/gallery/B3.png" />
                  </li>
                  <li >
                    <img src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/gallery/B4.png" />
                  </li>

                  <li >
                    <img src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/gallery/B5.png" />
                  </li>
                  <li >
                    <img src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/gallery/B6.png" />
                  </li>
                  <li >
                    <img src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/gallery/B7.png" />
                  </li>
                  <li >
                    <img src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/gallery/B8.png" />
                  </li>
                </ul>
            </div>
        </div>

    </div>
  </div>


  );
};

export default Gallery2;