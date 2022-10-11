import React from "react";
import StickyHeader from '../components/header/stickyheader';
import About1 from '../components/about/about1';

export default function About() {
  return (
    <div>
      <StickyHeader />
      <h1 className="text-3xl font-bold underline">About!</h1>
      <About1 />
    </div>
  );
}