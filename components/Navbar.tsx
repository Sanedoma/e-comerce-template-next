"use client";

import React from "react";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-sm dark:shadow-none flex justify-between items-center px-8 md:px-12 py-4 max-w-full font-headline font-bold tracking-tight">
      <div className="text-2xl font-black tracking-tighter text-slate-900 dark:text-slate-50 cursor-pointer active:scale-95 duration-200">
        The Atelier
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a
          className="text-blue-700 dark:text-blue-400 border-b-2 border-blue-700 pb-1 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
          href="/collections"
        >
          Collections
        </a>
        <a
          className="text-slate-600 dark:text-slate-400 pb-1 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
          href="#"
        >
          New Arrivals
        </a>
        <a
          className="text-slate-600 dark:text-slate-400 pb-1 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
          href="#"
        >
          Archive
        </a>
        <a
          className="text-slate-600 dark:text-slate-400 pb-1 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
          href="#"
        >
          About
        </a>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative hidden sm:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
            search
          </span>
          <input
            className="bg-surface-container-low border-none rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary w-48 lg:w-64 outline-none"
            placeholder="Search curated art..."
            type="text"
          />
        </div>
        <div className="flex gap-4 items-center">
          <ThemeToggle />
          <a href="/cart" className="flex items-center">
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 cursor-pointer hover:text-primary transition-colors">
              shopping_bag
            </span>
          </a>
          <a href="/login" className="flex items-center">
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 cursor-pointer hover:text-primary transition-colors">
              person
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
