import React from "react";

interface ProductCardProps {
  name: string;
  price: string;
  category: string;
  image: string;
  badge?: string;
  layout?: "default" | "stacked";
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  category,
  image,
  badge,
  layout = "default",
}) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-xl bg-surface-container-low">
        <img
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          src={image}
        />
        {badge && (
          <div className="absolute top-4 left-4">
            <span
              className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                badge === "New Arrival" || badge === "Atelier Exclusive"
                  ? "bg-tertiary-container text-on-tertiary-container"
                  : "bg-primary text-on-primary"
              }`}
            >
              {badge}
            </span>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 rounded-full font-bold text-sm shadow-xl flex items-center justify-center space-x-2 active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-lg">
              add_shopping_cart
            </span>
            <span>Quick Add</span>
          </button>
        </div>
        {/* Secondary button for stacked layout usually appears on hover too */}
        {layout === "stacked" && (
           <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
           <span className="material-symbols-outlined text-on-surface">add_shopping_cart</span>
         </button>
        )}
      </div>

      {layout === "default" ? (
        <div className="flex justify-between items-start">
          <div>
            <p className="font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">
              {category}
            </p>
            <h3 className="font-body text-lg font-medium text-on-surface">
              {name}
            </h3>
          </div>
          <p className="font-headline font-bold text-lg text-primary">{price}</p>
        </div>
      ) : (
        <div className="space-y-1">
          <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
            {category}
          </p>
          <h3 className="font-bold text-on-surface">{name}</h3>
          <p className="text-sm font-medium text-primary">{price}</p>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
