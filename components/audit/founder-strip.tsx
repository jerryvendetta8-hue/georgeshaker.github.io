import Image from "next/image";
import { Quote } from "lucide-react";
import { Reveal } from "@/components/motion";
import { site } from "@/lib/site";

const chips = ["Urology Registrar", "MRCS", "FEBU Part 1"];

export function AuditFounderStrip() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <Reveal className="mx-auto max-w-4xl">
        <div className="glass flex flex-col items-center gap-6 rounded-3xl p-7 text-center md:flex-row md:items-start md:p-9 md:text-left">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-2 ring-teal/40 md:h-24 md:w-24">
            <Image src="/images/george-shaker.jpg" alt={site.founder} fill sizes="96px" className="object-cover object-top" />
          </div>
          <div>
            <Quote className="mx-auto h-6 w-6 text-teal md:mx-0" aria-hidden />
            <blockquote className="mt-3 text-pretty text-lg leading-relaxed">
              &ldquo;As a urology registrar, I know a missed call isn&apos;t just admin — it&apos;s a patient who needed
              help and went elsewhere. This audit shows you exactly where the gaps are.&rdquo;
            </blockquote>
            <p className="mt-3 text-sm font-semibold">— {site.founder}</p>
            <ul className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
              {chips.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-xs font-semibold text-teal"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
