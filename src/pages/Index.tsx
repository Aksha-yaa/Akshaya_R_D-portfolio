import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Internships from "@/components/Internships";
import Certificates from "@/components/Certificates";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <TechStack />
    <Internships />
    <Certificates />
    <Resume />
    <Contact />
    <Footer />
  </div>
);

export default Index;
