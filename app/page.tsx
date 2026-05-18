import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Services from "@/src/components/Services";
import Ebook from "@/src/components/Ebook";
import Testimonials from "@/src/components/Testimonials";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col overflow-x-hidden bg-[#dedede]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Ebook />
      <Testimonials />
      <Footer />
    </main>
  );
}
