import React from "react";

const ProductGallery = () => {
  return (
    <div className="lg:col-span-7 space-y-6">
      <div className="relative group overflow-hidden rounded-xl bg-surface-container-low">
        <img
          className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
          alt="The Signature Weekender Main"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLYHI8Bd6zkT3uX9u2c1gZh42aonzzPLrLt_ikR9qZPHTkKkwMa0PHSrMGfxg-cSc2_hM09Q4jocvglAboKQGpW651tdmXFnm3ymWX-o8yFh9dyRmx9OcPUaGEsdZOoo5TUx7Xxyt0XQrNQWU4zCLeN5w-VFOZPMyVFta22uKxEGp20WY6FnvF811MDrplXPFTYgB7El6zwF2xMNQqd2sqHDenUmqs7e7pAfwmpFvj4nv7ZhOWdAvHEqE5nPS3HG2EUlJOwQddv1c3"
        />
        <div className="absolute top-6 left-6">
          <span className="bg-tertiary-container text-on-tertiary-container px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
            Atelier Exclusive
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="rounded-xl overflow-hidden bg-surface-container-low">
          <img
            className="w-full aspect-square object-cover hover:scale-110 transition-transform duration-500"
            alt="Detail 1"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4qPRk2PTBJ_bvhbITpEX5gRn6vzFjzMtumSEJYwE9tjty7bPLpSu842M-4zQGXNG5-9JvQlQKrF60cC14jAhEBYRah8vc6HvQPXJy1stZkEduQlhwzeTRqPlVbq5S5VhQR_U-V04zZ7u2gogXcUZWO-SNM-CJfZT8eXDQEJygIy8Lly1EuFpFAR0205t4zdQwPHEs5enVrBK3jL344L9TZIYZ-OMiKYoZXXI82cBQtuOGVrkddsQMBmqG6m-X1vlU-CvVWVYqXDkD"
          />
        </div>
        <div className="rounded-xl overflow-hidden bg-surface-container-low">
          <img
            className="w-full aspect-square object-cover hover:scale-110 transition-transform duration-500"
            alt="Detail 2"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC-0_LI2KL6v2Szjf5DwACl1RD2103-Ac5kKTqGHPJiXcAY0W46ckEdYXb9uytM1lT5xpCIALlhHrL_8yE32V4EW-BMZAk4IHbafehmTK3UEMtnd2wWAv1OsYqkjap1wxuB886lRP-IRHncQi6lQFnwmNirNCpxryxsZYPWk30xhEJiRMx5QiGhUsbOG8aF2ADucEnGT1By8K95v4z06wVPjJ5aWBoxaVRFnrLRMGILzBXJgSWXVm6D0a_OAlMYTO8l6Z9IMqMMbyw"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
