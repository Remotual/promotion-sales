import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import Playlist from "@/components/Playlist/Playlist";
import TeamSection from "@/components/TeamSection/TeamSection";
import Footer from "@/components/Footer/Footer";
import React from "react";
import { getSEOTags } from "@/utils/seo";
import Advantages from "@/components/Advantages/Advantages";
import companyController from "@/controller/companyController";

export const metadata = getSEOTags("landingPage");

export default async function page({ params: {companyName} }) {
  
  const controller = new companyController();
  const company = await controller.getCompanyByPK(companyName);

  return (
    <>
      <Navbar />
      <Advantages company={company} />
      <HeroSection />
      <TeamSection />
      <Playlist />
      <Footer />
    </>
  );
}
