import React from "react";
import StickyHeader from '../components/header/stickyheader';
import Gallery1 from '../components/gallery/gallery1';
import Gallery2 from '../components/gallery/gallery2';
import styles from "../styles/gallery.module.css";
import Footer from "../components/footer/footer";
import Head from 'next/head'


export default function Gallery() {
  return (
    
    <div className={styles.gallery} >
      <Head>
        <title>Gallery - Cyber Battles</title>
        <meta name="description" content="Created by Cyber Battles" />
        <link rel="icon" href="/favicon.ico" />
                
      </Head>
        <StickyHeader />
        <Gallery1 />
        <Gallery2 />
        <Footer/>
    </div>
  );
}