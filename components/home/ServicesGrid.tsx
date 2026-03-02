import Link from "next/link";
import { servicePages } from "@/lib/seoConfig";
import Image from "next/image";

const services = Object.values(servicePages);

export function ServicesGrid() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container-page space-y-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-2">
            Tree Services for Every Property in High Point, NC
          </h2>
          <p className="text-slate-600">
            From emergency removals to routine trimming, we provide full-service
            tree care for homes, rentals and commercial properties across the
            High Point and Triad area.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-2xl border border-slate-100 bg-slate-50/60 hover:bg-white shadow-sm hover:shadow-soft overflow-hidden flex flex-col transition-all"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/6407819/pexels-photo-6407819.jpeg"
                  alt={`${service.shortName} in High Point, NC`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs uppercase tracking-wide text-primary-light">
                    High Point, NC
                  </p>
                  <h3 className="font-semibold text-lg">{service.shortName}</h3>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-sm text-slate-600 mb-4">
                  {service.description}
                </p>
                <p className="text-sm font-semibold text-primary group-hover:underline">
                  Learn more about {service.shortName.toLowerCase()} →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

