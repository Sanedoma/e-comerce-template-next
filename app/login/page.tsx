import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col lg:flex-row items-stretch pt-20">
        {/* Editorial Left Column (Visual/Identity) */}
        <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-surface-container-high p-20 flex-col justify-between">
          <div className="z-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-primary-fixed-variant block mb-4">
              Established 2024
            </span>
            <h1 className="font-headline text-6xl font-extrabold leading-tight tracking-tighter text-on-surface">
              Crafting the <br />{" "}
              <span className="text-editorial-gradient">Digital Canvas.</span>
            </h1>
            <p className="mt-8 text-on-surface-variant text-lg max-w-md leading-relaxed">
              Join a community of artisans and collectors. Your personalized
              atelier experience awaits within.
            </p>
          </div>
          {/* Asymmetric Glass Card Element */}
          <div className="relative z-10 mt-auto">
            <div className="bg-surface-variant/60 backdrop-blur-2xl rounded-xl p-8 max-w-sm border border-white/20">
              <p className="italic font-headline text-on-surface text-xl mb-4">
                "Design is not just what it looks like and feels like. Design is
                how it works."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-container"></div>
                <span className="font-bold text-sm">Editorial Curation</span>
              </div>
            </div>
          </div>
          {/* Background Image Motif */}
          <img
            alt="abstract artistic background"
            className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnTkDuRvwURY31YBGVqk9SqNSk-9mn0kCrf8SPZK7hjlXkET000mzx7rwxwfh41h0bkpVYIr07MtyhcoVr-MNUMAj-hOsBeFZBO5RPVsu6bUF40kBUDEvyocEoVqqardc6n8PBdL0btjr8CZC1ywPm1vjXItSGf2OrK78gVwKHE6gZni_DzKEhYFGNaLKy-su2lyYVHw0b202fwZsHRHeOLHUxKDWG1499Otk17yXOvdO2RrW__jwZQzlaqG_PdM4-lWJ5EYKA3-Cq"
          />
        </div>

        {/* Login Right Column (Form) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-surface">
          <div className="w-full max-w-md space-y-12">
            <div className="text-center lg:text-left">
              <h2 className="font-headline text-4xl font-bold text-on-surface tracking-tight mb-2">
                Welcome Back
              </h2>
              <p className="text-on-surface-variant font-medium">
                Please enter your details to access the atelier.
              </p>
            </div>
            {/* Form */}
            <form className="space-y-6">
              <div className="space-y-2">
                <label
                  className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="w-full px-6 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary text-on-surface transition-all duration-200 placeholder-on-surface-variant/50 outline-none"
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label
                    className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <a
                    className="text-xs font-bold text-primary hover:underline underline-offset-4"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <input
                  className="w-full px-6 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary text-on-surface transition-all duration-200 placeholder-on-surface-variant/50 outline-none"
                  id="password"
                  placeholder="••••••••"
                  type="password"
                />
              </div>
              <div className="pt-4 space-y-4">
                <button
                  className="w-full py-4 px-8 rounded-full bg-gradient-to-br from-primary to-primary-container text-white font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-lg shadow-primary/20"
                  type="submit"
                >
                  Sign In
                </button>
                <button
                  className="w-full py-4 px-8 rounded-full bg-surface-container-high text-on-primary-fixed-variant font-bold text-lg hover:bg-surface-container-highest transition-all duration-300"
                  type="button"
                >
                  Create Account
                </button>
              </div>
            </form>
            {/* Divider */}
            <div className="relative flex items-center py-4">
              <div className="flex-grow border-t border-outline-variant/30"></div>
              <span className="flex-shrink mx-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant/40">
                Or continue with
              </span>
              <div className="flex-grow border-t border-outline-variant/30"></div>
            </div>
            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 py-3 px-6 rounded-xl bg-surface-container-lowest border border-outline-variant/20 hover:bg-surface-container-low transition-all duration-200">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  ></path>
                </svg>
                <span className="text-sm font-bold text-on-surface">Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 py-3 px-6 rounded-xl bg-surface-container-lowest border border-outline-variant/20 hover:bg-surface-container-low transition-all duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05 1.61-3.21 1.61-1.12 0-1.5-.68-2.81-.68-1.31 0-1.74.66-2.81.66-1.13 0-2.12-.66-3.16-1.61-2.14-2.14-2.84-6.3-1.27-8.62 1.02-1.52 2.59-2.48 4.31-2.48 1.34 0 2.29.69 3.08.69.75 0 1.83-.73 3.23-.73 1.31 0 2.49.62 3.14 1.48-3.05 1.76-2.54 6.13.43 7.68-.69 1.45-1.48 2.64-2.43 3.61zm-4.75-13.68c-.06-1.71 1.42-3.16 3.16-3.23.09 1.93-1.42 3.37-3.16 3.23z"></path>
                </svg>
                <span className="text-sm font-bold text-on-surface">Apple</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
