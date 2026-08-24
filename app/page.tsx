import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <FadeIn>
        <About />
      </FadeIn>

      <FadeIn>
        <Services />
      </FadeIn>

      <FadeIn>
        <Gallery />
      </FadeIn>

      <FadeIn>
        <Reviews />
      </FadeIn>

      <FadeIn>
        <Contact />
      </FadeIn>

      <Footer />
    </>
  );
}