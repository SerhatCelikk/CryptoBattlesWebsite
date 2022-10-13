import React from "react";
import StickyHeader from '../components/header/stickyheader';
import Gallery1 from '../components/gallery/gallery1';
import Gallery2 from '../components/gallery/gallery2';


export default function Gallery() {
  return (
    <div>
        <StickyHeader />
        <Gallery1 />
        <Gallery2 />
    </div>
  );
}