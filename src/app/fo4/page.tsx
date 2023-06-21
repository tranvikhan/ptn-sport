import { GroupScoresSections } from "@/components/fo4/GroupScoresSection";
import { FO4HeroSection } from "@/components/fo4/HeroSection";
import { FO4MatchesSections } from "@/components/fo4/MatchesSection";
import { FO4TeamsSections } from "@/components/fo4/TeamsSection";

export const metadata = {
  title: "Fifa Online 4",
  description: "A gathering place for top online trainers",
};
export default function FO4Page() {
  return (
    <main className="space-y-40 mb-40">
      <FO4HeroSection />
      <GroupScoresSections />
      <FO4MatchesSections />
      <FO4TeamsSections />
    </main>
  );
}
