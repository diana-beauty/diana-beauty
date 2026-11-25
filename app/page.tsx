
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BookingPanel from "@/components/BookingPanel";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#080808]">
      <div className="grid w-full grid-cols-1 items-start md:grid-cols-[minmax(0,1fr)_360px]">

        {/* Hemsidans huvudinnehåll */}
        <div className="min-w-0 overflow-hidden">
          <Navbar />

          <Hero />

          {/* Behandlingar */}
          <Services />

          {/* Informationssektion */}
          <Gallery />

          {/* Om Diana, kundomdömen och kontakt */}
          <div className="grid grid-cols-1 gap-0 border-t border-[#D4AF37]/20 md:grid-cols-3">
            <div className="border-b border-[#D4AF37]/20 md:border-b-0 md:border-r">
              <About />
            </div>

            <div className="border-b border-[#D4AF37]/20 md:border-b-0 md:border-r">
              <Reviews />
            </div>

            <div>
              <Contact />
            </div>
          </div>

          <Footer />
        </div>

        {/* Bokningspanel */}
        <aside className="min-w-0 w-full bg-[#080808] p-3 md:sticky md:top-0 md:h-screen md:overflow-y-auto">
          <BookingPanel />
        </aside>

      </div>
    </main>
  );
}
