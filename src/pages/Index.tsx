import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Internships from "@/components/Internships";
import Certificates from "@/components/Certificates";
import Resume from "@/components/Resume";
import FeaturedArticles from "@/components/FeaturedArticles";
import CodingProfiles from "@/components/CodingProfiles";
import Contact from "@/components/Contact";
import SmoothScroll from "@/components/SmoothScroll";

const Index = () => (
  <div className="min-h-screen bg-background">
    <SmoothScroll />
    <Navbar />
    <Hero />
    <About />
    <CallToAction />
    <Projects />
    <TechStack />
    <Internships />
    <Certificates />
    <Resume />
    <FeaturedArticles />
    <CodingProfiles />
    <Contact />
    <Footer />
  </div>
);

export default Index;
