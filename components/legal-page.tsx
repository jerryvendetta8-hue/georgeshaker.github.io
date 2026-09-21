import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden px-5 pb-24 pt-36 sm:px-8">
        <div className="grid-bg absolute inset-x-0 top-0 -z-10 h-[60vh]" aria-hidden />
        <article className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Legal</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-3 text-sm text-muted">Last updated: {updated}</p>
          <div className="glass mt-10 flex flex-col gap-8 rounded-3xl p-8 text-muted md:p-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_p]:mt-2 [&_p]:leading-relaxed [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
