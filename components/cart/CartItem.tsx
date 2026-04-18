import React from "react";

interface CartItemProps {
  id: number;
  name: string;
  price: string;
  variant: string;
  image: string;
  label?: string;
  labelType?: "primary" | "tertiary";
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({
  name,
  price,
  variant,
  image,
  label,
  labelType = "primary",
  quantity,
}) => {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl flex flex-col sm:flex-row gap-6 transition-transform hover:scale-[1.01] duration-300">
      <div className="w-full sm:w-48 h-48 rounded-lg overflow-hidden flex-shrink-0">
        <img alt={name} className="w-full h-full object-cover" src={image} />
      </div>
      <div className="flex-grow flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            {label && (
              <span
                className={`text-[0.6875rem] font-bold uppercase tracking-widest mb-1 block ${
                  labelType === "primary" ? "text-primary" : "text-tertiary"
                }`}
              >
                {label}
              </span>
            )}
            <h3 className="text-xl font-medium font-body">{name}</h3>
            <p className="text-sm text-on-surface-variant mt-1">{variant}</p>
          </div>
          <button className="text-on-surface-variant hover:text-error transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="flex justify-between items-end mt-4 sm:mt-0">
          <div className="flex items-center bg-surface-container-low rounded-full px-4 py-2 space-x-4">
            <button className="text-primary hover:scale-110 active:scale-95 transition-all">
              <span className="material-symbols-outlined text-lg">remove</span>
            </button>
            <span className="font-bold text-on-surface">
              {quantity.toString().padStart(2, "0")}
            </span>
            <button className="text-primary hover:scale-110 active:scale-95 transition-all">
              <span className="material-symbols-outlined text-lg">add</span>
            </button>
          </div>
          <div className="text-right">
            <span className="text-lg font-bold">{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
