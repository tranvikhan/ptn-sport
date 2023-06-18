import { Blog } from "@/components/home/Blog";
import { CallToAction } from "@/components/home/CallToAction";
import { SportsSection } from "@/components/home/SportsSection";
import { HeroSection } from "@/components/home/HeroSection";
import { Testimonials } from "@/components/home/Testimonials";

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
