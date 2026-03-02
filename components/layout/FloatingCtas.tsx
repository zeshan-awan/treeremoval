"use client";

import { Button } from "@/components/ui/button";
import { BUSINESS_PHONE_LINK } from "@/lib/seoConfig";

export function FloatingCtas() {
  return (
    <>
      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3">
        <Button
          asChild
          size="lg"
          variant="accent"
          className="shadow-soft"
        >
          <a href={`tel:${BUSINESS_PHONE_LINK}`}>Call Now</a>
        </Button>
        <Button
          asChild
          size="icon"
          variant="outline"
          className="rounded-full border-green-500 text-green-600"
        >
          <a
            href="https://wa.me/103010522223"
            aria-label="WhatsApp chat"
          >
            WA
          </a>
        </Button>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-30 bg-white/95 backdrop-blur border-t border-slate-200 py-3 px-4 shadow-[0_-8px_30px_rgba(15,23,42,0.08)] sm:hidden">
        <div className="flex items-center gap-3">
          <Button asChild className="flex-1">
            <a href="#estimate-form">Get Free Estimate</a>
          </Button>
          <Button asChild variant="outline">
            <a href={`tel:${BUSINESS_PHONE_LINK}`}>Call</a>
          </Button>
        </div>
      </div>
    </>
  );
}

