import React from "react";

const Hero = () => {
  return (
    <section className="px-8 md:px-20 py-12">
      <div className="relative w-full h-[870px] rounded-xl overflow-hidden group">
        <img
          alt="Editorial interior design"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8R8G9ftoiWGGMgzqBLZw2vnoAI7Rj8GfYyw46t_qz_1QOuFnCA3HedYvfLpvsoH__plA-2uR5pO6XUFLOcXEXjyFmhtIczewPULpiqbJf-z0MP_wIfvsEI9GE1IoOEuC73l8TnTBsDPHFWIZv-TQfjnIsGQhauidjva7rCNaph4TQ5D5xA4ss03b0pxopWsstLtgmD2xdo88d7_Wnq1AzN_jq82qpOZ56Q2qyVCHk7jAbQ3Q7q-O9LIX9lYdCDgoJkaaHWcGGAbHj"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-center p-12 md:p-24">
          <div className="max-w-2xl text-white">
            <span className="bg-tertiary-container/30 backdrop-blur-md text-on-tertiary-container px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6 inline-block">
              Curated Selection 2024
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-8">
              Artistry in every <br /> detail.
            </h1>
            <p className="font-body text-lg md:text-xl opacity-90 mb-10 max-w-lg leading-relaxed">
              Discover a collection where master craftsmanship meets modern
              minimalism. The Digital Atelier presents objects of desire for the
              discerning eye.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-primary to-primary-container text-white px-10 py-4 rounded-full font-bold text-md shadow-lg shadow-primary/20 active:scale-95 transition-transform">
                Shop the Collection
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full font-bold text-md hover:bg-white/20 active:scale-95 transition-transform">
                View Archive
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
