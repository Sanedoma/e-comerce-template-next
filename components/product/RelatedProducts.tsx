import React from "react";
import ProductCard from "../ProductCard";

const related = [
  {
    name: "The Slim Passport Folio",
    price: "$185.00",
    category: "Accessories",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBjcFBnYmdJmV_m1Y1Ca50FJtvTG4H876aedHiohg6jzwTa3hK62LYw6nAJPqSEEEWGOsJnrRUPUsQTCTEhNOqFHGh2YR9MnVLlQFCf74UBrM-Q7qxUSlpCFRmgf_ziIIstcREpNNf8RQzRESJTlDzxogidkLiEeYNOiyM2U6z_XKuybexpv45dhSlykLlw8lB-9gvI5C7Yr7J4NVvz-jdyh2Zj5CrKmfOir9YtvU0eahsV_L2z6fT1e2eeyhMKEmjk12HI4OevzhG-",
  },
  {
    name: "Signature Luggage Tag",
    price: "$65.00",
    category: "Essentials",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3pgZMslg1sZH_6n0UqwH9NzJBnMNc8AOIDzJcUxY4AyZB_rPOCX6XJeSC_lo-iK2Al0R6Q6KYZcM3d-qUl9vAPT2qzpA5w1VFgJdWRfmZFiveh-r3CvtXfGcrOgmldustZ37Nhkzanl7zOEQUt797j1JrzDrvDUHt54XN1Xr6amr-1_C_AiWChrtq0EEo9qZOJQ_B4yA5v_3lahzeufuKYCE-wvsJ0BPRRK6AuKWncGHBT6m6_k9_fl6JJx8lgsev8HtPewHbD0fh",
  },
  {
    name: "The Tech Commuter Kit",
    price: "$295.00",
    category: "Organization",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClxaA237UpyTC2QgiQl0ivG5xBmMh9WZrx1dWC9NlPMK3HKBwit3VSlVH9Pkk39cLVatxXnH7yVD2uo00Gbj9Q2EjsJ8zcDI55IFVtGY4RA8UgnMZvFbnTvisPBEtetfTF4Cc6iSOZHIsQnK92LJQKLlsvTNkBPvXAcXF54k3aFgXB3eqJHtLZ6pdFPm0sVy07jw4SoSDqYS_9naU3zm-XZfoEZmnkgdTOKVn7Z_mBzJjyygpAIrsRj1Dcv0K3FaZ6oiyCGzxtUYzo",
  },
  {
    name: "Fine Cashmere Travel Wrap",
    price: "$420.00",
    category: "Leisure",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQXh8D9LHPvVEwU-irRWC6U6CfHlHc5Tv7myi7s3kFIlTmDHIBaoxYOt8Ga3iq6s5qwxhf3zRf_b0FF9W7NtTLhYblTfB6j-C06YHr_u30AB_l5R_oT9Ybu1yhp5ND0vKIgiG6_ZrZY1lnaG3fMdu7Yeca-fvtCwdi3xErJcTzvkmqK91VX63fPBFcbSNLqCMQgveGMJMXas8jFPifci4elgCGfabeMsYsoq4OxqAmkhpNj75AEL1HccrWJnIOaZMT3DUSJWrjqU3O",
  },
];

const RelatedProducts = () => {
  return (
    <section className="mt-32 space-y-12">
      <div className="flex justify-between items-end">
        <div className="space-y-2">
          <p className="text-primary font-bold text-[10px] uppercase tracking-widest">
            Complete the Look
          </p>
          <h2 className="text-3xl font-headline font-extrabold tracking-tight">
            Related Objects
          </h2>
        </div>
        <a
          className="text-sm font-bold text-primary flex items-center hover:gap-2 transition-all"
          href="#"
        >
          View All{" "}
          <span className="material-symbols-outlined text-sm ml-1">
            arrow_forward
          </span>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {related.map((item, idx) => (
          <ProductCard key={idx} {...item} layout="stacked" />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
