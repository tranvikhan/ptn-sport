import { Fo4Team } from "@/models/fo4/entities";
import data from "../../data/fo4/mock.json";
import { AppContainer } from "../layout/AppContainer";
import { Fo4GroupScoresCard } from "./Fo4GroupScoresCard";

export const Fo4GroupScoresSections = () => {
  const dataTeam = data.teams as {
    [key in string]: Fo4Team;
  };
  return (
    <div id={"group-scores"}>
      <AppContainer>
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
            <Fo4GroupScoresCard
              key={index}
              groupScores={group}
              teams={dataTeam}
            />
          ))}
        </div>
      </AppContainer>
    </div>
  );
};
