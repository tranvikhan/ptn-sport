import { Blog } from "@/components/Blog";
import { CallToAction } from "@/components/CallToAction";
import { SportsSection } from "@/components/SportsSection";
import { HeroSection } from "@/components/HeroSection";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="space-y-40 mb-40">
      <HeroSection />
      <SportsSection />
      <Testimonials />
      <CallToAction />
      <Blog />
    </main>
  );
}
