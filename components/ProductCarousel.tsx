import React from "react";

const products = [
  {
    id: 1,
    name: "Atelier Analog One",
    price: "$189.00",
    category: "Limited Edition Vintage Finish",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8EsgT4tDgh-uhhdBCBV32_VndU-k3e75lPsY8kWkcjYMB2RuEMaC60YVCHF9PyM30jFbUprdXo1m3Ngo_csykTKjI3JNm9ZnNgMCA9CWRutrpvTvcTEimuCoHKmyaSfJ6TRjrKMotHqLPI-cLsKjcFky-DkscOI8MSdkqwfMUwK8qQAhH5EpFk2UvBNQrlDwzACE_V7lR__YLR6vOfmS9Ck7hol_Ux_V-d__q9qevvyJLeyp3SArc9jbES0XO12JA7WOoV_Fsx3Za",
    colors: ["bg-slate-800", "bg-orange-200"]
  },
  {
    id: 2,
    name: "The Aviator Noir",
    price: "$345.00",
    category: "Hand-polished Japanese Acetate",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPMlvlmCo-Q-lz0hCsQeowpGKt6D-1brWM0gUx5rop3lPTdWEsoPkEO7BmXvv0-C33krHCzDfywygfWwJq_ior2baurNQZxVK3vfQ7NGNQh1_Vf3q7MEgp1t6afIr-IdAvM-94j8Bm2YCkQ1wOPEIUGyl-JlU__QCg_6sPGOFvm6vobtsZNQDzgrFkKHAVYhw6M77EJM8d8TCBszTuZU1yhi_uQOBT7cxr9GeH2smpsAUQcgTWHjEOa9noAIpatu37lVGeF4K-XgNY",
    colors: ["bg-black", "bg-amber-800"]
  },
  {
    id: 3,
    name: "Canvas Tote II",
    price: "$210.00",
    category: "Organic Cotton & Calfskin",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjOmyqp7pVwBveE5iRWc3Bn2yFO5subaS6dTZ1EV1oUyiNC9nRACH_L9_suKGK4vJgpzgZOla2PoUSLGqATgGGAShSoXF6IX8bTsZtG_I3W58reWr_th-G689Ulfd32ArXNUPNeIb_PLWBzkDdJAsEbx6UQzSBMTfFi4CbXkCu9oZkMDTg8WdfD6RuZVvRepdvAIyPhEECIHAcNMGAQivkp5yOXZbv7DFRbhabLrWbR3_SN_YQeMIbyEG5dNQ16FcF6KREUa0x9Mxr",
    colors: ["bg-stone-100", "bg-stone-500"]
  },
  {
    id: 4,
    name: "Red Runner Proto",
    price: "$160.00",
    category: "Limited Release Performance",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAu2euh40dv2UqDfqkGo6QUMUn7bp2p6IAUIxdajLAl1m8iwe_rqCIQaHM2g4MtXbWSps50KS0HvqhuRIEiRQCQknQp4xupkVipCacekABALFzy-DY4carZX0Cxk5dbeHVuC1np_guVSVoGhl7jrXNpMuCGTtO-7aceWanhk0ajbjK0TCpM15wIxbtDL8tncdmZezsJUXCTDZ8Xau49n1SeX53jqDGpuC1H4OgJUry6xdRUGd42iFRqLS6DEr9kWDtIHc9QxGamJPkF",
    colors: ["bg-red-600"]
  }
];

const ProductCarousel = () => {
  return (
    <section className="py-20 bg-surface-container-low overflow-hidden">
      <div className="px-8 md:px-20 mb-12 flex justify-between items-end">
        <div>
          <span className="text-primary font-label text-xs font-bold uppercase tracking-widest mb-2 block">
            Weekly Curation
          </span>
          <h2 className="font-headline text-4xl font-extrabold tracking-tight">
            Best Sellers
          </h2>
        </div>
        <div className="flex gap-4">
          <button className="p-3 rounded-full bg-white shadow-sm border border-outline-variant/10 hover:bg-primary-fixed transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button className="p-3 rounded-full bg-white shadow-sm border border-outline-variant/10 hover:bg-primary-fixed transition-colors">
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
      <div className="flex gap-8 overflow-x-auto hide-scrollbar px-8 md:px-20 pb-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[320px] bg-white rounded-xl overflow-hidden group cursor-pointer transition-all duration-300"
          >
            <div className="h-80 relative overflow-hidden">
              <img
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={product.image}
              />
              <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-primary">
                  add_shopping_cart
                </span>
              </button>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-body text-md font-medium text-on-surface">
                  {product.name}
                </h4>
                <span className="font-headline text-md font-bold">
                  {product.price}
                </span>
              </div>
              <p className="text-on-surface-variant text-sm mb-4">
                {product.category}
              </p>
              <div className="flex gap-1">
                {product.colors.map((color, idx) => (
                  <div
                    key={idx}
                    className={`w-3 h-3 rounded-full ${color} border border-outline-variant`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCarousel;
