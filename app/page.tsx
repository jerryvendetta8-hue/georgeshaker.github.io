import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { HowItWorks } from "@/components/how-it-works";
import { Demo } from "@/components/demo";
import { RoiCalculator } from "@/components/roi-calculator";
import { Guarantee } from "@/components/guarantee";
import { Pricing } from "@/components/pricing";
import { Founder } from "@/components/founder";
import { Compliance } from "@/components/compliance";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Demo />
        <RoiCalculator />
        <Guarantee />
        <Pricing />
        <Founder />
        <Compliance />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
