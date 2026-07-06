import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RibbonMarquee from "@/components/RibbonMarquee";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Process from "@/components/Process";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <RibbonMarquee />
      <TrustedBy />
      <Work />
      <Services />
      <Process />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
