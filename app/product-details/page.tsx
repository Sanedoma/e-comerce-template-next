import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import FeatureSection from "@/components/product/FeatureSection";
import RelatedProducts from "@/components/product/RelatedProducts";

export default function ProductDetailsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-12 px-6 md:px-12 max-w-[1440px] mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 mb-8 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
          <a className="hover:text-primary transition-colors" href="/collections">
            Collections
          </a>
          <span className="material-symbols-outlined text-[10px]">
            chevron_right
          </span>
          <a className="hover:text-primary transition-colors" href="#">
            Leather Goods
          </a>
          <span className="material-symbols-outlined text-[10px]">
            chevron_right
          </span>
          <span className="text-on-surface">The Signature Weekender</span>
        </nav>

        {/* Product Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">
          <ProductGallery />
          <ProductInfo />
        </div>

        <FeatureSection />
        <RelatedProducts />
      </main>
      <Footer />
    </>
  );
}
