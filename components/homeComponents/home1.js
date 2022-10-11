import Image from "next/image";
import React from "react";
import styles from "./home1.module.css";
const Home1 = () => {
  return (
    <div className={styles.backgroundImage}>
      <div class="flex text-center text-white pt-8  max-w-6xl">
        <div class="flex-1 mt-8 ">
          <h4 className="text-3xl">THE RISE OF THE</h4>
          <h2 className="text-6xl ">STORY BASED NFT</h2>
          <p className="text-xl opacity-80 my-5 mx-20">
            Over the last few months, we’ve seen a rise of the “Story NFT” meta
            as more projects try to incorporate richer narratives and world
            building into their collections.
          </p>
          <p className="text-xl opacity-80 ">
            But with the exception of a few projects, we haven’t seen many
            collections that have gone all the way to telling a cohesive
            narrative with actual plots and character development...
          </p>
        </div>
        <div class="img flex-1">
          <div className="z-0">
            <img
              className={styles.backgroundCharacter}
              src="https://streetmachine.oss-us-west-1.aliyuncs.com/images/about/img.png"
              layout="fill"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;
