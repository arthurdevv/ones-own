"use client";

import Background from "@/components/Background";
import Biographies from "@/components/Biographies";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ListenCTA from "@/components/ListenCTA";
import MusicVideos from "@/components/MusicVideos";
import SmoothScroll from "@/components/SmoothScroll";
import Tour from "@/components/Tour";
import { useWindowWidth } from "@/hooks/useWindowWidth";

export default function Home() {
  const { breakpoint } = useWindowWidth();

  return (
    <SmoothScroll>
      <Background />
      <Header />
      <main key={breakpoint}>
        <Hero />
        <Tour />
        <Biographies />
        <MusicVideos />
        <ListenCTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
