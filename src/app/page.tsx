import { HomeActivities } from "@/components/home/HomeActivities";
import { HomeCallToAction } from "@/components/home/HomeCallToAction";
import { HomeSportsSection } from "@/components/home/HomeSportsSection";
import { HomeHeroSection } from "@/components/home/HomeHeroSection";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";

export default function Home() {
  return (
    <main className="space-y-40 mb-40">
      <HomeHeroSection />
      <HomeSportsSection />
      <HomeTestimonials />
      <HomeCallToAction />
      <HomeActivities />
    </main>
  );
}
