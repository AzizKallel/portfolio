import Image from "next/image";
import { trustedBy } from "@/data/content";

function initials(name: string) {
  return name
    .replace(/[\[\]/]/g, "")
    .trim()
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TrustedBy() {
  const loop = [...trustedBy, ...trustedBy];

  return (
    <section className="border-y border-white/10 bg-ink py-12">
      <p className="eyebrow mb-8 text-center text-cream/40">
        Trusted by brands & founders
      </p>
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee-slow items-center gap-8 sm:gap-12 md:gap-16">
          {loop.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex shrink-0 flex-col items-center gap-2"
              title={brand.name}
            >
              {brand.logo ? (
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={112}
                  height={112}
                  className="h-20 w-20 rounded-full border border-white/10 object-cover grayscale transition-all duration-300 hover:grayscale-0 sm:h-24 sm:w-24 md:h-28 md:w-28"
                />
              ) : (
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5 font-display text-xl font-bold text-cream/40 sm:h-24 sm:w-24 sm:text-2xl md:h-28 md:w-28">
                  {initials(brand.name)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}