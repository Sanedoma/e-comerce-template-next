import React from "react";

const ProductInfo = () => {
  return (
    <div className="lg:col-span-5 flex flex-col pt-4">
      <div className="sticky top-28 space-y-8">
        <div className="space-y-2">
          <p className="text-primary font-bold text-[10px] uppercase tracking-[0.2em]">
            Crafted in Florence
          </p>
          <h1 className="text-5xl font-headline font-extrabold tracking-tight text-on-surface leading-tight">
            The Signature Weekender
          </h1>
          <div className="flex items-center space-x-4">
            <div className="flex text-tertiary">
              {[1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star_half
              </span>
            </div>
            <span className="text-sm font-medium text-on-surface-variant">
              (4.9 · 128 Reviews)
            </span>
          </div>
        </div>

        <div className="text-3xl font-headline font-bold text-on-surface">
          $1,450.00
        </div>

        <div className="space-y-4">
          <p className="text-on-surface-variant leading-relaxed">
            An editorial-grade travel companion. Meticulously handcrafted from
            full-grain Tuscan leather, this piece features a structure that
            softens with age while maintaining its sculptural integrity.
            Designed for the discerning traveler who values the intersection of
            art and utility.
          </p>
        </div>

        {/* Color Swatches */}
        <div className="space-y-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface">
            Material Palette
          </p>
          <div className="flex gap-4">
            <button
              aria-label="Cognac"
              className="w-10 h-10 rounded-full bg-[#3d2b1f] ring-2 ring-primary ring-offset-4 ring-offset-background"
            ></button>
            <button
              aria-label="Midnight"
              className="w-10 h-10 rounded-full bg-[#1a1a1a] hover:scale-110 transition-transform"
            ></button>
            <button
              aria-label="Sage"
              className="w-10 h-10 rounded-full bg-[#5d6153] hover:scale-110 transition-transform"
            ></button>
          </div>
        </div>

        {/* Size Selection */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface">
              Dimensions
            </p>
            <button className="text-[10px] font-bold text-primary underline underline-offset-4">
              Size Guide
            </button>
          </div>
          <div className="flex gap-3">
            <button className="flex-1 py-3 px-4 rounded-lg bg-surface-container-lowest border-2 border-primary text-primary font-bold text-sm">
              45L Standard
            </button>
            <button className="flex-1 py-3 px-4 rounded-lg bg-surface-container-low text-on-surface-variant font-bold text-sm hover:bg-surface-container-high transition-colors">
              60L Extended
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="space-y-4 pt-4">
          <button className="w-full py-5 rounded-full bg-gradient-to-r from-primary to-primary-container text-white font-bold text-lg shadow-xl shadow-primary/20 active:scale-95 transition-all">
            Add to Cart
          </button>
          <button className="w-full py-5 rounded-full bg-surface-container-high text-on-primary-fixed-variant font-bold text-lg hover:bg-surface-container-highest transition-all flex items-center justify-center space-x-2">
            <span className="material-symbols-outlined">favorite</span>
            <span>Save to Wishlist</span>
          </button>
        </div>

        {/* Shipping Info */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-outline-variant/20">
          <div className="flex items-center space-x-3">
            <span className="material-symbols-outlined text-primary">
              local_shipping
            </span>
            <span className="text-xs font-medium">Complimentary Delivery</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="material-symbols-outlined text-primary">
              verified_user
            </span>
            <span className="text-xs font-medium">Lifetime Guarantee</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
