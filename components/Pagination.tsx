import React from "react";

const Pagination = () => {
  return (
    <div className="mt-24 flex items-center justify-center space-x-4">
      <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface hover:border-primary hover:text-primary transition-all">
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <button className="w-12 h-12 rounded-full bg-primary text-on-primary font-bold">
        1
      </button>
      <button className="w-12 h-12 rounded-full text-on-surface-variant font-bold hover:bg-surface-container-low transition-colors">
        2
      </button>
      <button className="w-12 h-12 rounded-full text-on-surface-variant font-bold hover:bg-surface-container-low transition-colors">
        3
      </button>
      <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface hover:border-primary hover:text-primary transition-all">
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
    </div>
  );
};

export default Pagination;
