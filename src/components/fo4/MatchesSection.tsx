import { Container } from "../layout/Container";
import Image from "next/image";
import data from "../../data/mock.json";
import { MatchCard } from "./MatchCard";
import { Match } from "@/models/Match";
import { Team } from "@/models/Team";
export const FO4MatchesSections = () => {
  const dataTeam = data.teams as {
    [key in string]: Team;
  };
  return (
    <div id={"matches"}>
      <Container>
        <div className="md:w-2/3 lg:w-1/2">
          <h2 className="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
            Matches Schedule
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Get ready to witness 32 exhilarating matches as the FIFA Online 4 -
            2023 Tournament kicks off in spectacular fashion. Here&apos;s the
            electrifying schedule that will keep you on the edge of your seat
            throughout the tournament:
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.values(data.matches)?.map((m) => {
            const teamA = {
              ...m.teamA,
              detail: m.teamA.id ? (dataTeam[m.teamA.id] as Team) : undefined,
            };
            const teamB = {
              ...m.teamB,
              detail: m.teamB.id ? (dataTeam[m.teamB.id] as Team) : undefined,
            };
            const match: Match = {
              ...m,
              teamA,
              teamB,
            };
            return <MatchCard key={match.id} match={match} />;
          })}
        </div>
      </Container>
    </div>
  );
};
