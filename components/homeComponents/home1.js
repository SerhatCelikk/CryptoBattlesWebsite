import React from "react";
import styles from "./home1.module.css";
import CharacterCarousel from "../carousels/charactercarousel";

const Home1 = () => {
  return (
    <div className={styles.combine1}>
      <div className={styles.area1}>
        <div className={styles.lImg}>
          <img className={styles.lImgg}
            src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/index/left.png"
            alt=""
            id="index_left"
          />
        </div>
        <div className={styles.cText}>
          <div className={styles.titleWELCOMETOTHE}>WELCOME TO THE</div>
          <div className={styles.titleIMG}>STREETS</div>
          <div className={styles.txtp}>
            <p className={styles.txtpp}>
              Street Machine is a new Web3 anime brand and NFT collection
              created by award winning video game artist SpenzerG.
            </p>
            <p className={styles.txtpp}>
              Inspired by sci-fi, cyberpunk, and anime pop culture, the Street
              Machine collection centers around a sprawling story arc, told
              through the lens of an online graphic novel.
            </p>
          </div>
          <a className={styles.learnmore} href="/about">
            <div className={styles.learnmorebutton}>LEARN MORE</div>
          </a>
        </div>
        <div className={styles.rImg}>
          <img className={styles.rImgg}
            src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/index/right.png"
            alt=""
            id="index_right"
          />
        </div>
      </div>
      <div className={styles.area2}>
        <div className={styles.cardHeroList}>
          <CharacterCarousel />
        </div>
        <div className={styles.cardHeroGrid}>
          <div className={styles.gridt}>
            <div className={styles.introduce}>
              <p>
                Starting with the launch of 8,000 unique NFT characters, we aim
                to create an original graphic novel and IP universe with the
                active collaboration from our community.
              </p>
            </div>
            <div class="hero">
              <img
                src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/index/index_gallery_1.jpg"
                alt=""
                id="index_gallery_1"
              />
            </div>
          </div>
          <div class="gridt flex1">
            <div class="hero">
              <img
                src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/index/index_gallery_2.jpg"
                alt=""
                id="index_gallery_2"
              />
            </div>
            <div class="introduce">
              <p>
                Every NFT is hand-drawn by Spenzer himself. Over 500 different
                traits.
              </p>
            </div>
          </div>
          <div class="explain">
            <div>
              <p>
                Our NFTs are not just random jpegs, but actual characters in our
                universe that you can help develop. Choose your player. Write
                your story. Who will you be in this brave new world?
              </p>
            </div>
            <a href="/gallery.html">
              <div class="clickButton radius7PX">VIEW GALLERY</div>
            </a>
          </div>
        </div>
      </div>
      <div class="area3">
        <div class="partner">
          <div class="titleIMG">partners and collabs</div>
          <div class="partnerList">
            <ul class="display alignStretch justifyCenter" id="partnerList">
              <li class="partner display alignCenter">
                <img
                  src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/partner/1.svg"
                  alt=""
                  id="index_partner_01"
                />
              </li>
              <li class="partner display alignCenter">
                <img
                  src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/partner/2.png"
                  alt=""
                  id="index_partner_02"
                />
              </li>
              <li class="partner display alignCenter">
                <img
                  src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/partner/3.png"
                  alt=""
                  id="index_partner_03"
                />
              </li>
              <li class="partner display alignCenter">
                <img
                  src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/partner/4.svg"
                  alt=""
                  id="index_partner_04"
                />
              </li>
              <li class="partner display alignCenter">
                <img
                  src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/partner/5.svg"
                  alt=""
                  id="index_partner_05"
                />
              </li>
              <li class="partner display alignCenter">
                <img
                  src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/partner/6.svg"
                  alt=""
                  id="index_partner_06"
                />
              </li>
              <li class="partner display alignCenter">
                <img
                  src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/partner/7.png"
                  alt=""
                  id="index_partner_07"
                />
              </li>
              <li class="partner display alignCenter">
                <img
                  src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/partner/8.png"
                  alt=""
                  id="index_partner_08"
                />
              </li>
              <li class="partner display alignCenter">
                <img
                  src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/partner/9.svg"
                  alt=""
                  id="index_partner_09"
                />
              </li>
              <li class="partner display alignCenter">
                <img
                  src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/partner/10.svg"
                  alt=""
                  id="index_partner_10"
                />
              </li>
              <li class="partner display alignCenter">
                <img
                  src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/partner/11.png"
                  alt=""
                  id="index_partner_11"
                />
              </li>
              <li class="partner display alignCenter">
                <img
                  src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/partner/12.png"
                  alt=""
                  id="index_partner_12"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;
