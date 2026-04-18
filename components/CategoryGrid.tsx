import React from "react";

const CategoryGrid = () => {
  return (
    <section className="px-8 md:px-20 py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[800px]">
        {/* Main Featured Item */}
        <div className="md:col-span-2 md:row-span-2 bg-surface-container-low rounded-xl overflow-hidden relative group">
          <img
            alt="Designer Watch"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDupLIqDILdruqgpymLJybDWJhwMdGZrJjc7gKKK0nZV6rbAkBInWVQk9KjWQWoqVoHxcqHr9ov4zzcHjn5xLnFiwI-fUAN01v6ajtwzhuHjmlcPgP86hN19GQ-iJuchhK9iSAd4A80RYPlFtFdPidJdJtls3pN-9I5KRuF8VbjH9kq_AiklMO0wN4ZeaLyTageDgl_Go8bx2ZW07-LYG3BNHES2AXnoNOGRTJoMdeKg8_OFGt7WoTEoiQB7Gih73p6j2UHCkrb1eYE"
          />
          <div className="absolute bottom-0 left-0 p-10 w-full bg-gradient-to-t from-black/60 to-transparent">
            <p className="text-white/80 font-label text-xs font-bold uppercase tracking-[0.2em] mb-2">
              New Arrivals
            </p>
            <h3 className="text-white font-headline text-3xl font-bold mb-4 tracking-tight">
              The Precision Series
            </h3>
            <a
              className="text-white font-body text-sm underline underline-offset-4 hover:opacity-80 transition-opacity"
              href="#"
            >
              Explore Category
            </a>
          </div>
        </div>
        {/* Secondary Item */}
        <div className="md:col-span-2 bg-surface-container-low rounded-xl overflow-hidden relative group">
          <img
            alt="Premium Sneakers"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5VI-LjeJynaCHCMzClZFqtvQyF7EU60pYH7F0zhgQp-pdX_bQHO5UWw0I3KBLz7sig5iWbtqJsk6eRBTGWGggvY662iKj0OO7YEb2598Gwik14iFD_a-k3dGP3nOt7bC3-KC0XZBYSQ8JUAthM07uxy6JpbrrJriNh3r9AHqHflE0R8NfKtzjmOztgvraHljANbo6zoxe9RoRbI_RXrWH61k-AmeNijFIBjES3DIH7bvex5clHRxh8We52x74uZPWMIp1E7nhhYuf"
          />
          <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/40 to-transparent">
            <h3 className="text-white font-headline text-2xl font-bold tracking-tight">
              Essential Footwear
            </h3>
            <p className="text-white/90 font-body text-sm mt-2">
              Crafted for motion, designed for style.
            </p>
          </div>
        </div>
        {/* Smaller Items */}
        <div className="bg-surface-container-low rounded-xl overflow-hidden relative group">
          <img
            alt="Audio Tech"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDVzvYUlzHhMQaq19G5DIX2-w9CV2jQg9ixMPY7lxyrbmBjQg0nB7qenUuQScZdLqV7BL_fQjMlmkGdkl1kqKn-4qdnHs0mGS6UWYeEHf4h-KDn0jz8SBDY-A605GWPSVgnzN1-G7c_X33AdqbsLtqxqzVjz5CblT3w0u5ZnLregi9T_0P729HoAvKm2aTgqBu7ZAO9hqurclC7IznBCdwoZj3PpTIkVaxv5Fccm5U6DJkbxG8cq76FVil8IGcB6sC5hDZQM-2LRu5"
          />
          <div className="absolute inset-0 p-6 flex flex-col justify-end bg-black/20 group-hover:bg-black/40 transition-colors">
            <h3 className="text-white font-headline text-lg font-bold">
              Studio Audio
            </h3>
          </div>
        </div>
        <div className="bg-surface-container-low rounded-xl overflow-hidden relative group">
          <img
            alt="Accessories"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuArxLgD072Hr2wFl1ldhIaDlp71ti6dWKjG44N3KkfoSNa_l6zbcLSzDde82-D-vPFjGU2V3Lb8uHDxKaCiF_Y4jITNZ4AJpl9aZMFyEAUPNVfl6Z8W5c45KamfBPYpAj71v37J_s79_04sWBgMA-WkAzPJTi8GxPYSd1KB36rfWK-hB-62-yGXd__P7FS6pC9Ekz2W8Ou89T98rBFaXMlc9TE4o6zFIdPVcI1eEQ0jH6DujoRKn84ZZDeohHCZa02Vd20u_NyBzBt6"
          />
          <div className="absolute inset-0 p-6 flex flex-col justify-end bg-black/20 group-hover:bg-black/40 transition-colors">
            <h3 className="text-white font-headline text-lg font-bold">
              The Archive
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
