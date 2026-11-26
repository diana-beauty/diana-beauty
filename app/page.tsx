
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
    <main className="min-h-screen w-full bg-[#FAF8F3]">
      <div className="grid min-h-screen w-full grid-cols-1 items-start 2xl:grid-cols-[minmax(0,1fr)_360px]">

        {/* Huvudinnehåll */}
        <div className="min-w-0 bg-[#FAF8F3]">
          <Navbar />

          <Hero />

          <Services />

          <Gallery />

          {/* Informationssektion */}
          <section className="border-t border-[#D4AF37]/30">

            {/* Om Diana och kontakt */}
            <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">

              <div className="min-w-0 border-b border-[#D4AF37]/30 lg:border-b-0 lg:border-r">
                <About />
              </div>

              <div className="min-w-0 border-b border-[#D4AF37]/30 lg:border-b-0">
                <Contact />
              </div>

            </div>

            {/* Kundomdömen får en egen bred sektion */}
            <div className="min-w-0 border-t border-[#D4AF37]/30">
              <Reviews />
            </div>

          </section>

          <Footer />
        </div>

        {/* Bokningspanel – endast på extra breda skärmar */}
        <aside className="sticky top-0 hidden h-screen min-w-0 overflow-y-auto bg-[#080808] p-3 2xl:block">
          <BookingPanel />
        </aside>

      </div>
    </main>
  );
}
