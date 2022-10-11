import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import StickyHeader from '../components/header/stickyheader'
import Home1 from '../components/homeComponents/home1'
import Home2 from '../components/homeComponents/home2'
import Home3 from '../components/homeComponents/home3'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="http://fonts.cdnfonts.com/css/barcade" rel="stylesheet"></link>
                
      </Head>
      <StickyHeader />
     <Home1/>
     <Home2/>
     <Home3/>
    </div>
  )
}
