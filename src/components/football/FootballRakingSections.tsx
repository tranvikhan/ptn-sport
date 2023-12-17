"use client";

import fallingMeteorAnimation from "@/assets/animations/falling_meteor.json";
import { football2023WinterMock } from "@/data/football/2023/winter/mock";
import { hexToRgba } from "@/utils/hexToRgba";
import Lottie from "lottie-react";
import Image from "next/image";
import { BarChart2 } from "react-feather";
import { AppContainer } from "../layout/AppContainer";

export const FootballRakingSections = () => {
  return (
    <div id={"ranking"}>
      <AppContainer>
        <div className="md:w-2/3 lg:w-1/2">
          <BarChart2 size={32} className="text-gray-700 dark:text-white" />
          <h2 className="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
            Ranking
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
          {football2023WinterMock.rankings.map((ranking, index) => {
            const team = football2023WinterMock.teams[ranking.teamId];
            return (
              <div
                key={ranking.teamId}
                className="aspect-auto relative p-4 md:p-6 border border-gray-100 rounded-xl bg-white dark:bg-gray-800 dark:border-gray-700 dark:shadow-none hover:shadow-2xl hover:shadow-gray-600/10 transition"
                style={{
                  background: hexToRgba(ranking.color, 0.25),
                }}
              >
                <Lottie
                  loop
                  autoPlay
                  initialSegment={[index + 5, 45]}
                  animationData={fallingMeteorAnimation}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />
                <div className="flex flex-col items-center">
                  <h2
                    className="text-3xl md:text-5xl font-black"
                    style={{ color: ranking.color }}
                  >
                    {ranking.title}
                  </h2>
                  <Image
                    src={team.logo}
                    alt={team.name}
                    loading="lazy"
                    width={150}
                    height={150}
                    className="mt-4 w-[100px] md:w-[150px] rounded-full"
                  />
                  <h2
                    className="mt-4 text-lg font-bold md:text-xl"
                    style={{ color: ranking.color }}
                  >
                    {team.name}
                  </h2>
                  <h3
                    className="text-md font-light md:text-lg"
                    style={{ color: hexToRgba(ranking.color, 0.8) }}
                  >
                    {`Team ${team.index}`}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </AppContainer>
    </div>
  );
};
