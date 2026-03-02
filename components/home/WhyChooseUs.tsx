import { ReactNode } from "react";

const items: { title: string; body: string; icon: ReactNode }[] = [
  {
    title: "Local, Owner-Operated Crew",
    body: "We live and work in the High Point area, so you get fast response times, friendly service and a team that actually cares what your yard looks like when we leave.",
    icon: "🌲"
  },
  {
    title: "Licensed, Insured & Safety-First",
    body: "From bucket trucks to ropes and rigging, we use the right equipment and safety practices to protect your home, roof, fence and neighbors.",
    icon: "🛡️"
  },
  {
    title: "Transparent, Upfront Pricing",
    body: "We walk your property with you, explain your options and give clear, written estimates before any work begins—no surprise add-ons on the day of the job.",
    icon: "💵"
  },
  {
    title: "Clean, Respectful Job Sites",
    body: "We treat your property like our own. Brush, limbs and logs are hauled off or neatly staged and we blow off driveways, grass and beds before we leave.",
    icon: "✅"
  }
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 bg-slate-50">
      <div className="container-page space-y-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-2">
            Why High Point Homeowners Trust Our Tree Service
          </h2>
          <p className="text-slate-600">
            When there&apos;s a heavy branch over your roof or a tree leaning
            toward power lines, you can&apos;t afford to gamble. We combine
            local knowledge, pro-grade equipment and honest communication to
            make tree work simple and stress-free.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white border border-slate-100 p-5 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-light text-lg">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-charcoal">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

