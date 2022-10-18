import React from "react";
import StickyHeader from '../components/header/stickyheader';
import Gallery1 from '../components/gallery/gallery1';
import Gallery2 from '../components/gallery/gallery2';
import styles from "../styles/gallery.module.css";
import Footer from "../components/footer/footer";



export default function Gallery() {
  return (
    
    <div className={styles.gallery} >
        <StickyHeader />
        <Gallery1 />
        <Gallery2 />
        <Footer/>
    </div>
  );
}