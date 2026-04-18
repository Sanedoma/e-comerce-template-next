import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";

const cartItems = [
  {
    id: 1,
    name: "The Signature Chelsea Boot",
    price: "$420.00",
    variant: "Size: 42 | Color: Espresso",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRONKhl3SFQmRyizwFw0HwWDesDAb_X8iLBwuwDIbLTe1zzhEEMczBR323rTbbP2qVOub1URh-Vl6yNao2OhnYZyEFiEO-8CnkZVjQ5SBTL1gMcFpqN4F9Q86NcZcv6k2UhBNKUcBw68J_RnM3TlWvCS0Ve9q-5DPisdsOrTzq9kIZ2J6Urh37rtAI5iZuKPtE75HFtPXxmsKYAoyC365EY0PbbguXmdaHHars1Ip-T7ty_rltPNuMbTxv63DS018gWV3O0D4mLt_z",
    label: "Limited Edition",
    labelType: "primary" as const,
    quantity: 1,
  },
  {
    id: 2,
    name: "Virgin Wool Topcoat",
    price: "$1,250.00",
    variant: "Size: L | Color: Midnight Blue",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuATLEyIRn4CZMUkrRbKfd1FtJhtFMDyQ_VWsM1zWj0rb2B8gFo-AjJGwR1_9VLrdzrxwD8DWOiSFpFfPcU0IOkiS0cBMCsGmunFjah6AbIJURa2bcxJHvcGWzN6rRLyfwV8iJL_1PYe0C1k1h0o0BSF6gXoXfWkBmmQq1xq_wlF-wpADX0iFPT-QNSrD8wyHPvL9-eb6Oqwdf2nNfMOOIUVq3prVD3xjQLp3yRTR1ZY1-P3l493UPB-AFk0d-U79Z14GmTWO_NhmI_x",
    label: "Sustainable Choice",
    labelType: "tertiary" as const,
    quantity: 1,
  },
];

export default function CartPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-8 md:px-12 max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 font-headline">
            Your Bag
          </h1>
          <p className="text-on-surface-variant font-medium font-body">
            Review your selected pieces before finishing your curation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>

            {/* Promo Code */}
            <div className="bg-surface-container-low p-8 rounded-xl mt-8">
              <label className="block text-sm font-bold tracking-wide mb-4 text-on-surface uppercase font-body">
                Gift Card or Promo Code
              </label>
              <div className="flex gap-4">
                <input
                  className="bg-surface-container-lowest rounded-xl border-none focus:ring-1 focus:ring-primary flex-grow px-6 py-4 text-sm tracking-wider uppercase placeholder:text-outline outline-none"
                  placeholder="ENTER CODE"
                  type="text"
                />
                <button className="bg-surface-container-high px-8 py-4 rounded-xl font-bold text-on-primary-fixed-variant hover:bg-surface-container-highest transition-all active:scale-95">
                  APPLY
                </button>
              </div>
            </div>
          </div>

          <CartSummary />
        </div>
      </main>
      <Footer />
    </>
  );
}
