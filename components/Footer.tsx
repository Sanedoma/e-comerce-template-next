import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-100 dark:bg-slate-900 rounded-t-[2rem] py-16 px-12 mt-20 flex flex-col md:flex-row justify-between items-start gap-12 font-body text-sm tracking-wide">
      <div className="max-w-xs space-y-6">
        <div className="font-headline font-black text-2xl text-slate-900 dark:text-slate-50">
          The Atelier
        </div>
        <p className="text-slate-500 dark:text-slate-400">
          Redefining the relationship between craft and the modern consumer.
          Designed in Paris, crafted globally.
        </p>
        <div className="flex space-x-4">
          <a
            className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-primary hover:text-white transition-all"
            href="#"
          >
            <span className="material-symbols-outlined text-sm">share</span>
          </a>
          <a
            className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-primary hover:text-white transition-all"
            href="#"
          >
            <span className="material-symbols-outlined text-sm">mail</span>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <h4 className="font-bold text-on-surface uppercase text-[10px] tracking-widest">
            Experience
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                href="#"
              >
                Sustainability
              </a>
            </li>
            <li>
              <a
                className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                href="#"
              >
                Shipping
              </a>
            </li>
            <li>
              <a
                className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                href="#"
              >
                Returns
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-on-surface uppercase text-[10px] tracking-widest">
            Connect
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                href="#"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                href="#"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                href="#"
              >
                Terms
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block space-y-4">
          <h4 className="font-bold text-on-surface uppercase text-[10px] tracking-widest">
            Journal
          </h4>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm space-y-2">
            <p className="text-xs text-slate-500">
              Join the inner circle for rare releases.
            </p>
            <div className="flex">
              <input
                className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-l-lg text-xs p-2 outline-none"
                placeholder="Email"
                type="email"
              />
              <button className="bg-primary text-white p-2 rounded-r-lg">
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pt-8 border-t border-slate-200 dark:border-slate-800 text-slate-400 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
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
