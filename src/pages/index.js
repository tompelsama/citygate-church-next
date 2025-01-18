import Image from "next/image";
import Head from 'next/head'
import "./index.scss";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Features from "@/components/Features/Features";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return <div className="Home">
      <Head>
        <title>Citygate Fellowship Church | Home</title>
        <meta content="Indonesian community church in Sydney, Australia" name="keywords"></meta>
      </Head>    
      <Hero />
      <About />
      <Features />
      {/* <Story /> */}
      <Contact />
  </div>
}
