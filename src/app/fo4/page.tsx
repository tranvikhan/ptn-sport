import { Fo4GroupScoresSections } from "@/components/fo4/Fo4GroupScoresSections";
import { Fo4HeroSection } from "@/components/fo4/Fo4HeroSection";
import { Fo4MatchesSections } from "@/components/fo4/Fo4MatchesSections";
import { Fo4TeamsSections } from "@/components/fo4/Fo4TeamsSections";

export const metadata = {
  title: "Fifa Online 4",
  description: "A gathering place for top online trainers",
};
export default function FO4Page() {
  return (
    <main className="space-y-40 mb-40">
      <Fo4HeroSection />
      <Fo4GroupScoresSections />
      <Fo4MatchesSections />
      <Fo4TeamsSections />
    </main>
  );
}
