import React from "react";

const Newsletter = () => {
  return (
    <section className="px-8 md:px-20 py-24">
      <div className="bg-primary-container/20 rounded-xl p-12 md:p-20 text-center relative overflow-hidden border border-primary-container/10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-tertiary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="material-symbols-outlined text-primary text-5xl mb-6">
            mail
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Stay in the loop.
          </h2>
          <p className="font-body text-lg text-on-surface-variant mb-10 leading-relaxed">
            Join our exclusive mailing list for early access to collection
            drops, editorial stories, and artisan spotlights. No noise, just the
            finest curation.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              className="flex-1 bg-surface-container-lowest border-none rounded-full px-8 py-4 focus:ring-2 focus:ring-primary text-on-surface outline-none"
              placeholder="Enter your email"
              type="email"
            />
            <button
              className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary-container transition-colors shadow-lg shadow-primary/20"
              type="submit"
            >
              Join Now
            </button>
          </form>
          <p className="mt-6 text-xs text-on-surface-variant/60 font-body">
            By subscribing, you agree to our Privacy Policy. Unsubscribe
            anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
