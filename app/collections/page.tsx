import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FiltersSidebar from "@/components/FiltersSidebar";
import ProductCard from "@/components/ProductCard";
import Pagination from "@/components/Pagination";

const products = [
  {
    name: "Artisan Wool Overcoat",
    price: "$1,250",
    category: "Outerwear",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDBRcQKptzx-mVW06y8UMWo_droMSd0TkXsl_8cx92-ae67tdCKX4Pu0ezmj6_70bzhggtZLljrRQxK6D6YHv12LAESNBqSWIQkg4vPL3WLoefBb0v5wEKUd3qSQHhfM36XIj6_UXLGjxqFRSBdPRPIpNk-OhTZEVMTSgrObh-Mqr_yxYY7rLqu3ni3ysbfqTAq4J1bwlZs5-8FuuKJWFqAmnHswHK0t-Ykp-EdV0_n-NUpSipTs5cDZITrMAkzjA-2TKxXBszPa7Av",
    badge: "New Arrival",
  },
  {
    name: "The Meridian Watch",
    price: "$490",
    category: "Accessories",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA22jSWlWshwt6zQbCmAme-DOFRglqpEso49ZfFAiAyiQDWR9AssCu5M8IRoSYve-9fw58j5TU85CViUGmauyTbz4Owoe7CGYxeuDtPvg1UlE4P6MVDlixEUbvfBFWK_yDGIG0YvK2qoCT6DUHR-XS5mFb3LOBWjkILv1sl4eO0LtDwFRJ26KmY5QlnwPw2hy4FUoGlp3-olmG2Bj4T-H-HAInH2I5oIjqfaHstfRO98K7-IjI9EwTARVc_FA7B_Dm_C8D2tySSE_Nc",
  },
  {
    name: "Velvet Sculptural Heels",
    price: "$720",
    category: "Footwear",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDrM-8oSkcvc3VULuZZkA2wKzeJZ4_5sUEWKt2lJ99FFxlt75mljAM81Gg2bZrfpw8Wx_0UKGL03dx0FMJYmX2LmZ967FuQ-vF-4qaFfw1-LleYV7RKj-2QKq4PrU07a7ZLG29SREuWDCpfPPGC9OpEVkP9YvdUo1131dl5-K5X59XkXEoHEZPrF1Cc5KZKWqsuQqmhAyi1BOe0m_xaybDRWiePPYLt74-3Z7PILS-zQFJ-U9_dKiAm6ylNmLPVCY7hnIAgp20_8Tc5",
    badge: "Sustainable",
  },
  {
    name: "Heritage Silk Scarf",
    price: "$325",
    category: "Accessories",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAV56o9sjtl9nhW_-GSaxYVDCFN58gSLkkVpwhLnalpSHZ-lgp1EBxf8ov2q1nVJt_OHw15AnD69yJfW9z_9saw2xecAsk4taQ5fpYeb-aJL6rtF05RJcS8isEjhKYQQy2e-gOJ6tYO-hkYEziqWGAZ4eQx4F_FY0cQTUW-0fGIv4yjK1hXFZBbjV9_YU6LKg2M2rhxYVGQ_5cBwB-j3GoSd5jaSIwNnORdMV15Jn501vzhaTFqW_8VF4skE9BcBD4xzS6IlVL2pnQf",
  },
  {
    name: "Essential Heavyweight Tee",
    price: "$110",
    category: "Ready-to-Wear",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBGbC6SSYh06MmVOGeXYpDSBSqHsyMbeUot4o7UZLs29H06EuF3KxwG8phUU19jA3UzsDElJEl0fagw3NQPBfffL2FIS0aYn7hVuxJ0K-IJ67CIQCwnnURigKa8OHbez8VFv6q2SP1Ts5PNfKMejfmJTJ1HKEij3E1B0ImnDR6MCBYEpvMjqyXFKvkSpcHOCNtDvQg2DKO2QDedwkhziQfN8EXxp6sCgO_cOIJpNy5N0AxG1YWzgaeYtqtHIA8Aj3SDQUHWHSp_4y5n",
  },
  {
    name: "Architectural Tote Bag",
    price: "$850",
    category: "Accessories",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkWpEdpQW1s2qfUsULxo0UFSTab1LodSdRlu9me7yul7TD7-4Aze25myvLbgT3U8Ea54gHz4ZrceA4QNO7shOWI-sNhTQ2-40ZiLa7_5b1dUqj_hDJn31ukwh_SnIbedpJrdIYG2Ye-2aZYmu9sgGqMG65W7zl_gAVHleXhB9kNPjNXDNq8w97HH54nHXbL9dD8FsAlQSsLUjAaYY6kOW8HmBIlRoLyfczMli8kLszolLgI_bm7bqBZdnia8R3DJEEwv-LV4hWZLh1",
  },
];

export default function CollectionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 px-8 md:px-12 max-w-[1600px] mx-auto">
        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center space-x-2 text-sm text-on-surface-variant mb-12"
        >
          <a className="hover:text-primary transition-colors" href="/">
            Home
          </a>
          <span className="material-symbols-outlined text-xs">
            chevron_right
          </span>
          <a className="hover:text-primary transition-colors" href="#">
            Collections
          </a>
          <span className="material-symbols-outlined text-xs">
            chevron_right
          </span>
          <span className="font-semibold text-on-surface">The Winter Edit</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-16">
          <FiltersSidebar />

          {/* Product Canvas */}
          <section className="flex-1">
            {/* Header & Sort */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h1 className="font-headline text-5xl font-extrabold tracking-tighter mb-4 text-on-surface">
                  The Winter Edit
                </h1>
                <p className="text-on-surface-variant max-w-md font-medium">
                  Curated artisanal pieces designed for the modern transition.
                  48 items found.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  Sort By:
                </span>
                <div className="relative group">
                  <button className="flex items-center space-x-2 bg-surface-container-lowest px-4 py-2 rounded-lg font-medium text-sm shadow-sm group-hover:bg-surface-container-low transition-colors">
                    <span>Newest Arrivals</span>
                    <span className="material-symbols-outlined text-sm">
                      expand_more
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-16 gap-x-8">
              {products.map((product, idx) => (
                <ProductCard key={idx} {...product} />
              ))}
            </div>

            <Pagination />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
