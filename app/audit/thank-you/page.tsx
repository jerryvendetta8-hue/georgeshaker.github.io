import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThankYouContent } from "@/components/audit/thank-you";

export const metadata: Metadata = {
  title: "Your audit is booked | Dr George Shaker",
  description: "Thanks for requesting your free missed-call audit.",
  robots: { index: false, follow: false },
};

export default async function ThankYouPage({ searchParams }: { searchParams: Promise<{ name?: string }> }) {
  const { name } = await searchParams;
  const firstName = name?.trim().split(/\s+/)[0]?.slice(0, 40);

  return (
    <>
      <Navbar minimal ctaHref="/" ctaLabel="Back to home" />
      <main>
        <ThankYouContent firstName={firstName} />
      </main>
      <Footer />
    </>
  );
}
