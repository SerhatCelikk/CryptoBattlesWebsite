import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import StickyHeader from "../components/header/stickyheader";
import HomeBanner from "../components/homeComponents/homebanner";
import Home1 from "../components/homeComponents/home1";
import Home2 from "../components/homeComponents/home2";
import Home3 from "../components/homeComponents/home3";
import Home4 from "../components/homeComponents/home4";
import Home5 from "../components/homeComponents/home5";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cyber Battles</title>
        <meta name="description" content="Created by Cyber Battles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StickyHeader />
      <HomeBanner />
      <div className={styles.main}>
        <Home1 />
        <Home2 />
        <Home3 />
        <Home4 />
        <Home5 />
      </div>
      <Footer />
    </div>
  );
}
