import Image from "next/image";
import React from "react";
import styles from "./home1.module.css";
const Home1 = () => {
  return (
    <div>
      <div className={styles.banner}>
        <div className="shading radius7PX">
          <img
            src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/index/bg.jpg"
            alt=""
            id="index_banner"
          />
        </div>
      </div>
      <div className={styles.area1}>
        <div className={styles.cornerImages}>
          <img
            src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/index/left.png"
            alt=""
            id="index_left"
          />
        </div>
        <div className={styles.cText}>
          <div className={styles.titleWelcomeToThe}>WELCOME TO THE</div>
          <div className={styles.titleIMG}>STREETS</div>
          <div className={styles.txtp}>
            <p>
              Street Machine is a new Web3 anime brand and NFT collection
              created by award winning video game artist SpenzerG.
            </p>
            <p>
              Inspired by sci-fi, cyberpunk, and anime pop culture, the Street
              Machine collection centers around a sprawling story arc, told
              through the lens of an online graphic novel.
            </p>
          </div>
          <a href="/about">
            <div className={styles.clickButton}>LEARN MORE</div>
          </a>
        </div>
        <div className={styles.cornerImages}>
          <img
            src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/index/right.png"
            alt=""
            id="index_right"
          />
        </div>
      </div>
      <div className={styles.bigContainer}>
        <div className={styles.cardHeroGrid}>
          <div className={styles.gridt}>
            <div className="introduce">
              <p className={styles.p}>
                Starting with the launch of 8,000 unique NFT characters, we aim
                to create an original graphic novel and IP universe with the
                active collaboration from our community.
              </p>
            </div>
            <div className="hero">
              <img
                src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/index/index_gallery_1.jpg"
                alt=""
                id="index_gallery_1"
              />
            </div>
          </div>
          <div className={styles.gridt}>
            <div className="hero">
              <img
                src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/index/index_gallery_2.jpg"
                alt=""
                id="index_gallery_2"
              />
            </div>
            <div className="introduce">
              <p className={styles.p}>
                Every NFT is hand-drawn by Spenzer himself. Over 500 different
                traits.
              </p>
            </div>
          </div>
          <div className={styles.explain}>
            <div>
              <p className={styles.p}>
                Our NFTs are not just random jpegs, but actual characters in our
                universe that you can help develop. Choose your player. Write
                your story. Who will you be in this brave new world?
              </p>
            </div>
            <a href="/gallery">
              <div className={styles.clickButton}>VIEW GALLERY</div>
            </a>
          </div>
        </div>
        <div className={styles.area3}>
      <div className={styles.partner}>
                        <div className={styles.titleIMG}>
                            partners and collabs
                        </div>
                        <div className={styles.partnerList}>
                          <ul className={styles.underPartnerList} id="partnerList">
                            <li className={styles.li}>
                              <img className={styles.img} src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/partner/1.svg" alt="" id="index_partner_01" width={95} height={95}/>
                            </li>
                            <li className={styles.li}>
                              <img className={styles.img} src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/partner/2.png" alt="" id="index_partner_02" width={95} height={95}/>
                            </li>
                            <li className={styles.li}>
                              <img className={styles.img} src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/partner/3.png" alt="" id="index_partner_03" width={95} height={95}/>
                            </li>
                            <li className={styles.li}>
                              <img className={styles.img} src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/partner/4.svg" alt="" id="index_partner_04" width={95} height={95}/>
                            </li>
                            <li className={styles.li}>
                              <img className={styles.img} src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/partner/5.svg" alt="" id="index_partner_05" width={95} height={95}/>
                            </li>
                            <li className={styles.li}>
                              <img className={styles.img} src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/partner/6.svg" alt="" id="index_partner_06" width={95} height={95}/>
                            </li>
                            <li className={styles.li}>
                              <img className={styles.img} src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/partner/7.png" alt="" id="index_partner_07" width={95} height={95}/>
                            </li>
                            <li className={styles.li}>
                              <img className={styles.img} src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/partner/8.png" alt="" id="index_partner_08" width={95} height={95}/>
                            </li>
                            <li className={styles.li}>
                              <img className={styles.img} src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/partner/9.svg" alt="" id="index_partner_09" width={95} height={95}/>
                            </li>
                            <li className={styles.li}>
                              <img className={styles.img} src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/partner/10.svg" alt="" id="index_partner_10" width={95} height={95}/>
                            </li>
                            <li className={styles.li}>
                              <img className={styles.img} src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/partner/11.png" alt="" id="index_partner_11" width={95} height={95}/>
                            </li>
                            <li className={styles.li}>
                              <img className={styles.img} src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/partner/12.png" alt="" id="index_partner_12" width={95} height={95}/>
                            </li>
                          </ul>
                        </div>
                    </div>
      </div>
      </div>
      
    </div>
  );
};

export default Home1;
