import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-surface-container-low rounded-t-[2rem] py-16 px-12 mt-20 flex flex-col md:flex-row justify-between items-start gap-12 font-body text-sm tracking-wide">
      <div className="max-w-xs space-y-6">
        <div className="font-headline font-black text-2xl text-on-surface">
          The Atelier
        </div>
        <p className="text-on-surface-variant">
          Redefining the relationship between craft and the modern consumer.
          Designed in Paris, crafted globally.
        </p>
        <div className="flex space-x-4">
          <a
            className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-primary hover:text-white transition-all text-on-surface"
            href="#"
          >
            <span className="material-symbols-outlined text-sm">share</span>
          </a>
          <a
            className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-primary hover:text-white transition-all text-on-surface"
            href="#"
          >
            <span className="material-symbols-outlined text-sm">mail</span>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-on-surface">
        <div className="space-y-4">
          <h4 className="font-bold uppercase text-[10px] tracking-widest text-on-surface">
            Experience
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                className="text-on-surface-variant hover:text-on-surface transition-colors"
                href="#"
              >
                Sustainability
              </a>
            </li>
            <li>
              <a
                className="text-on-surface-variant hover:text-on-surface transition-colors"
                href="#"
              >
                Shipping
              </a>
            </li>
            <li>
              <a
                className="text-on-surface-variant hover:text-on-surface transition-colors"
                href="#"
              >
                Returns
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold uppercase text-[10px] tracking-widest text-on-surface">
            Connect
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                className="text-on-surface-variant hover:text-on-surface transition-colors"
                href="#"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className="text-on-surface-variant hover:text-on-surface transition-colors"
                href="#"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                className="text-on-surface-variant hover:text-on-surface transition-colors"
                href="#"
              >
                Terms
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block space-y-4">
          <h4 className="font-bold uppercase text-[10px] tracking-widest text-on-surface">
            Journal
          </h4>
          <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm space-y-2">
            <p className="text-xs text-on-surface-variant">
              Join the inner circle for rare releases.
            </p>
            <div className="flex">
              <input
                className="w-full bg-surface-container-low border-none rounded-l-lg text-xs p-2 outline-none text-on-surface"
                placeholder="Email"
                type="email"
              />
              <button className="bg-primary text-on-primary p-2 rounded-r-lg">
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant">
        <p>© 2024 The Digital Atelier. Crafted for the discerning.</p>
        <div className="flex space-x-6">
          <span>Visa</span>
          <span>Amex</span>
          <span>Apple Pay</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
