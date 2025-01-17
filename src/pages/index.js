import Image from "next/image";
import "./index.scss";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Features from "@/components/Features/Features";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return <div className="Home">
      <Hero />
      <About />
      <Features />
      {/* <Story /> */}
      <Contact />
  </div>
}
