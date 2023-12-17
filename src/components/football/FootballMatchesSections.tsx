import { football2023WinterMock } from "@/data/football/2023/winter/mock";
import { AppContainer } from "../layout/AppContainer";
import Image from "next/image";
import { Activity, Calendar } from "react-feather";
export const FootballMatchesSections = () => {
  return (
    <div id={"matches"}>
      <AppContainer>
        <div className="md:w-2/3 lg:w-1/2">
          <Calendar size={32} className="text-gray-700 dark:text-white" />
          <h2 className="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
            Matches Schedule
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Experience the heart-pounding action of the PTN Global Football
            Winter Cup 2023 matches. From nail-biting showdowns to stunning
            goals, this section keeps you on the edge of your seat with the
            latest updates, thrilling moments, and standout performances. Dive
            into the intensity of each match as corporate teams compete for
            supremacy on the winter pitch. Stay tuned for real-time scores, key
            plays, and the unfolding drama of this extraordinary tournament.
          </p>
        </div>
        <div className="mt-12 flex flex-col space-y-8">
          {football2023WinterMock.matchRounds.map((round, index) => (
            <div key={index} className="flex flex-col space-y-4">
              <h2 className="text-lg font-light text-gray-700 dark:text-white md:text-xl">
                {round.name}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {round.matches.map((match, index) => {
                  const teamA = football2023WinterMock.teams[match.teamA];
                  const teamB = football2023WinterMock.teams[match.teamB];
                  return (
                    <div
                      key={index}
                      className="aspect-auto p-4 md:p-6 border border-gray-100 rounded-xl bg-white dark:bg-gray-800 dark:border-gray-700 dark:shadow-none hover:shadow-2xl hover:shadow-gray-600/10 transition"
                    >
                      <div className="flex flex-row justify-between items-center">
                        <div className="flex-1 flex flex-row items-center space-x-2">
                          <Image
                            src={teamA.logo}
                            alt={teamA.name}
                            loading="lazy"
                            width={100}
                            height={100}
                            className="w-[70px] md:w-[100px] rounded-full"
                          />
                          <div className="flex-1 flex flex-col items-start">
                            <h2 className="text-sm font-medium text-gray-700 dark:text-white md:text-md">
                              {teamA.name}
                            </h2>
                            <h3 className="text-xs font-normal text-gray-500 dark:text-gray-200 md:text-sm">
                              {`Team ${teamA.index}`}
                            </h3>
                          </div>
                        </div>
                        <Activity className="text-gray-700 dark:text-white w-[16px] h-[16px] md:w-[24px] md:h-[24px]" />
                        <div className="flex-1 flex flex-row items-center space-x-2">
                          <div className="flex-1 flex flex-col items-end">
                            <h2 className="text-sm font-medium text-gray-700 dark:text-white md:text-md">
                              {teamB.name}
                            </h2>
                            <h3 className="text-xs font-normal text-gray-500 dark:text-gray-200 md:text-sm">
                              {`Team ${teamB.index}`}
                            </h3>
                          </div>
                          <Image
                            src={teamB.logo}
                            alt={teamB.name}
                            loading="lazy"
                            width={100}
                            height={100}
                            className="w-[70px] md:w-[100px] rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </AppContainer>
    </div>
  );
};
