import React from "react";

const FeatureSection = () => {
  return (
    <section className="mt-32 space-y-16">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-4xl font-headline font-extrabold tracking-tight">
          The Art of the Atelier
        </h2>
        <p className="text-on-surface-variant">
          Every element is considered, from the weight of the solid brass
          hardware to the reinforced double-stitch construction.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: "architecture",
            title: "Architectural Form",
            desc: "A silhouette that commands attention while remaining functional enough for global travel.",
            bg: "bg-surface-container-low",
          },
          {
            icon: "eco",
            title: "Sustainably Sourced",
            desc: "Sourced from Gold-Rated tanneries ensuring ethical practices and minimal environmental impact.",
            bg: "bg-surface-container-highest",
          },
          {
            icon: "handshake",
            title: "Master Crafted",
            desc: "Each bag is individualy numbered and signed by the lead artisan in our Florence workshop.",
            bg: "bg-surface-container-low",
          },
        ].map((feature, idx) => (
          <div
            key={idx}
            className={`p-10 rounded-xl ${feature.bg} space-y-6 flex flex-col justify-between`}
          >
            <span className="material-symbols-outlined text-4xl text-primary">
              {feature.icon}
            </span>
            <div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
