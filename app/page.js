import Advantages from "@/components/Advantages/Advantages";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import Playlist from "@/components/Playlist/Playlist";
import TeamSection from "@/components/TeamSection/TeamSection";
import { getSEOTags } from "@/utils/seo";

export const metadata = getSEOTags("landingPage");

export default function page() {
  const companyData = {
    companyName: "Advanced Caulking Systems",
    servicesTags:
      "administrative-support,project-management,accounting-&-financial-support,marketing-&-sales-support,data-entry-&-management,website-support",
    buckSavingsTags:
      "administrative-support,project-management,accounting-&-financial-support,marketing-&-sales-support,data-entry-&-management,website-support",
  };
  return (
    <>
      <Navbar />
      <Advantages company={companyData} />
      <HeroSection />
      <TeamSection />
      <Playlist />
      <Footer />
    </>
  );
}
