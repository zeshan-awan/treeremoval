import { Button } from "@/components/ui/button";
import { BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_LINK } from "@/lib/seoConfig";

export function EmergencyBanner() {
  return (
    <section className="py-10 bg-gradient-to-r from-accent to-red-700 text-white">
      <div className="container-page flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-1">
            24/7 Emergency Tree Removal in High Point, NC
          </h2>
          <p className="text-sm text-red-100 max-w-xl">
            If a tree is on your home, driveway or power lines, don&apos;t
            wait. Our emergency crew is on call days, nights and weekends
            across the High Point area.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild size="lg" variant="outline" className="bg-white text-accent hover:bg-red-50">
            <a href={`tel:${BUSINESS_PHONE_LINK}`}>
              Call {BUSINESS_PHONE_DISPLAY} Now
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost" className="border border-white/50 text-white">
            <a href="#estimate-form">Request Emergency Estimate</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

