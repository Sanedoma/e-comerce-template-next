import React from "react";

const FiltersSidebar = () => {
  return (
    <aside className="w-full lg:w-72 shrink-0 space-y-10">
      <div>
        <h2 className="font-headline text-xl font-bold mb-6 tracking-tight">
          Filters
        </h2>
        {/* Category */}
        <div className="mb-8">
          <h3 className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">
            Category
          </h3>
          <div className="space-y-3">
            {[
              { label: "Ready-to-Wear", checked: false },
              { label: "Accessories", checked: true },
              { label: "Footwear", checked: false },
              { label: "Home Objects", checked: false },
            ].map((cat, idx) => (
              <label key={idx} className="flex items-center group cursor-pointer">
                <input
                  defaultChecked={cat.checked}
                  className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary bg-surface mr-3 cursor-pointer"
                  type="checkbox"
                />
                <span className="text-sm font-medium group-hover:text-primary transition-colors">
                  {cat.label}
                </span>
              </label>
            ))}
          </div>
        </div>
        {/* Price Range */}
        <div className="mb-8">
          <h3 className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">
            Price Range
          </h3>
          <input
            className="w-full h-1 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
            type="range"
          />
          <div className="flex justify-between mt-3 text-xs font-medium text-on-surface-variant">
            <span>$0</span>
            <span>$5,000+</span>
          </div>
        </div>
        {/* Color */}
        <div className="mb-8">
          <h3 className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">
            Color Palette
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              { color: "#131b2e", title: "Midnight" },
              { color: "#ffffff", title: "Alabaster", border: true },
              { color: "#784b00", title: "Terracotta", active: true },
              { color: "#2563eb", title: "Cobalt" },
              { color: "#737686", title: "Slate" },
            ].map((c, idx) => (
              <button
                key={idx}
                className={`w-8 h-8 rounded-full ring-2 ring-offset-2 transition-all ${
                  c.active
                    ? "ring-primary ring-offset-background"
                    : "ring-transparent hover:ring-outline"
                } ${c.border ? "border border-outline-variant" : ""}`}
                style={{ backgroundColor: c.color }}
                title={c.title}
              ></button>
            ))}
          </div>
        </div>
        {/* Size */}
        <div>
          <h3 className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">
            Size
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className={`py-2 text-xs font-bold rounded transition-all uppercase ${
                  size === "S"
                    ? "bg-primary text-on-primary"
                    : "border border-outline-variant hover:border-primary hover:text-primary"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FiltersSidebar;
