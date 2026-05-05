import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import MarqueeTape from "@/components/MarqueeTape";
import FeaturedProjects from "@/components/FeaturedProjects";
import SideProjects from "@/components/SideProjects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="overflow-x-hidden">
        <MarqueeTape />
        <Hero />
        <FeaturedProjects />
        <SideProjects />
      </main>
      <Footer />
    </>
  );
}
