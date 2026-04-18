import CategoryGrid from "@/components/CategoryGrid";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import ProductCarousel from "@/components/ProductCarousel";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen">
        <Hero />
        <CategoryGrid />
        <ProductCarousel />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
