import { Team } from "@/models/Team";
import data from "../../data/mock.json";
import { Container } from "../layout/Container";
import { GroupScoresCard } from "./GroupScoresCard";

export const GroupScoresSections = () => {
  const dataTeam = data.teams as {
    [key in string]: Team;
  };
  return (
    <div id={"group-scores"}>
      <Container>
        <div className="md:w-2/3 lg:w-1/2">
          <h2 className="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
            Results of the group stage
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            After three intense and thrilling days of competition, we have
            determined the top two teams from each group to advance to the
            knockout stage.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data.groupScores.map((group, index) => (
            <GroupScoresCard key={index} groupScores={group} teams={dataTeam} />
          ))}
        </div>
      </Container>
    </div>
  );
};
