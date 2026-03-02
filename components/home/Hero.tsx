"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_LINK,
  PRIMARY_LOCATION
} from "@/lib/seoConfig";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-charcoal text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.pexels.com/photos/2766339/pexels-photo-2766339.jpeg"
          alt="Tree service crew working safely in High Point, NC"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/30" />
      </div>

      <div className="container-page py-20 sm:py-28 lg:py-32 grid gap-10 lg:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-light">
            24/7 Emergency Tree Service in {PRIMARY_LOCATION}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            High Point&apos;s Trusted{" "}
            <span className="text-primary">Tree Service Experts</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-100 max-w-xl">
            Fast, affordable and fully insured tree removal, trimming and storm
            cleanup for homes and businesses across the High Point, NC area.
            When a tree is leaning, cracked or already down, we arrive fast and
            leave your property safe and clean.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <a href={`tel:${BUSINESS_PHONE_LINK}`}>Call Now</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#estimate-form">Get Free Estimate</a>
            </Button>
            <p className="text-sm text-slate-100">
              Or call{" "}
              <span className="font-semibold">{BUSINESS_PHONE_DISPLAY}</span>
              {" – "}
              <span className="text-primary-light">24/7 emergency response</span>
            </p>
          </div>

          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm">
            <div className="rounded-lg bg-white/5 p-3 border border-white/10">
              <dt className="font-semibold">✔ Licensed &amp; Insured</dt>
              <dd className="text-slate-200">
                Safety-focused crews and equipment
              </dd>
            </div>
            <div className="rounded-lg bg-white/5 p-3 border border-white/10">
              <dt className="font-semibold">✔ 24/7 Emergency</dt>
              <dd className="text-slate-200">
                Nights, weekends &amp; storms covered
              </dd>
            </div>
            <div className="rounded-lg bg-white/5 p-3 border border-white/10">
              <dt className="font-semibold">✔ Local to High Point</dt>
              <dd className="text-slate-200">
                Fast response across the Triad
              </dd>
            </div>
            <div className="rounded-lg bg-white/5 p-3 border border-white/10">
              <dt className="font-semibold">✔ Clean Job Sites</dt>
              <dd className="text-slate-200">
                Full debris haul-off &amp; cleanup
              </dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="rounded-2xl bg-white/95 text-charcoal p-6 sm:p-8 shadow-soft max-w-md ml-auto"
        >
          <h2 className="text-xl font-bold mb-2">
            Need a tree gone fast in High Point?
          </h2>
          <p className="text-sm text-slate-600 mb-4">
            Tell us what&apos;s going on and we&apos;ll give you a fast,
            no-obligation estimate.
          </p>
          <form
            id="estimate-form"
            className="space-y-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block text-xs font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                required
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60"
                placeholder="Full name"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  required
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60"
                  placeholder="Best number"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">
                  Service Address
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60"
                  placeholder="High Point, NC"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1">
                What do you need help with?
              </label>
              <textarea
                required
                rows={3}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60"
                placeholder="Example: Large oak leaning toward my house after last night’s storm."
              />
            </div>
            <Button type="submit" className="w-full">
              Request My Free Estimate
            </Button>
            <p className="text-[11px] text-slate-500 text-center">
              By submitting, you agree to be contacted about your tree service
              request. No spam, ever.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

