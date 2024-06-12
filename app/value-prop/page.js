import React from 'react'
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import Playlist from "@/components/Playlist/Playlist";
import TeamSection from "@/components/TeamSection/TeamSection";
import { getSEOTags } from '@/utils/seo';
import VideoTestimonials from '@/components/VideoTestimonials/VideoTestimonials';

export const metadata = getSEOTags("landingPage");

export default function page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TeamSection />
      <VideoTestimonials />
      <Playlist />
      <Footer />
    </>
  )
}
