import React from "react";

const CartSummary = () => {
  return (
    <aside className="lg:col-span-4 sticky top-32">
      <div className="bg-surface-container-high rounded-xl p-8">
        <h2 className="text-2xl font-extrabold mb-8 font-headline">Summary</h2>
        <div className="space-y-4 mb-8">
          <div className="flex justify-between text-on-surface-variant">
            <span className="font-medium">Subtotal</span>
            <span className="font-bold text-on-surface">$1,670.00</span>
          </div>
          <div className="flex justify-between text-on-surface-variant">
            <span className="font-medium">Standard Shipping</span>
            <span className="font-bold text-on-surface">Free</span>
          </div>
          <div className="flex justify-between text-on-surface-variant">
            <span className="font-medium">Estimated Tax</span>
            <span className="font-bold text-on-surface">$133.60</span>
          </div>
          <div className="pt-4 border-t border-outline-variant/20 flex justify-between items-end">
            <span className="text-lg font-bold">Total</span>
            <span className="text-3xl font-black text-primary">$1,803.60</span>
          </div>
        </div>
        <button className="w-full bg-gradient-to-br from-primary to-primary-container text-white py-5 rounded-full font-bold text-lg shadow-lg hover:shadow-primary/20 transition-all active:scale-95 mb-6">
          Proceed to Checkout
        </button>
        <div className="flex items-start gap-4 p-4 bg-white/40 rounded-lg">
          <span
            className="material-symbols-outlined text-primary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            verified_user
          </span>
          <div className="text-xs text-on-surface-variant leading-relaxed font-body">
            Every purchase from <span className="font-bold text-on-surface">The Atelier</span> is insured and backed by our lifetime craftsmanship guarantee.
          </div>
        </div>
      </div>
      <div className="mt-6 px-4">
        <p className="text-xs text-center text-outline">
          Secure payments via Stripe and Apple Pay
        </p>
        <div className="flex justify-center gap-4 mt-4 opacity-50">
          <span className="material-symbols-outlined text-2xl">credit_card</span>
          <span className="material-symbols-outlined text-2xl">account_balance</span>
          <span className="material-symbols-outlined text-2xl">contactless</span>
        </div>
      </div>
    </aside>
  );
};

export default CartSummary;
