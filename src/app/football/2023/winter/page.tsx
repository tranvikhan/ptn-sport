import { AnimationSnow } from "@/components/animations/AnimationSnow";
import { FootballHeroSection } from "@/components/football/FootballHeroSection";
import { FootballMatchesSections } from "@/components/football/FootballMatchesSections";
import { FootballRakingSections } from "@/components/football/FootballRakingSections";
import { FootballTeamSection } from "@/components/football/FootballTeamSection";

export const metadata = {
  title: "Football Winter Cup 2023",
  description:
    "Welcome to PTN Global's Football Winter Cup 2023 page, where the thrill of the world's favorite sport meets the magic of the winter season! Get ready to witness the greatest football spectacle as elite teams from around the globe converge for an unforgettable competition filled with passion, skill, and icy determination.",
};
export default function Football2023Winter() {
  return (
    <>
      <AnimationSnow />
      <main className="space-y-40 mb-40">
        <FootballHeroSection />
        <FootballRakingSections />
        <FootballTeamSection />
        <FootballMatchesSections />
      </main>
    </>
  );
}
