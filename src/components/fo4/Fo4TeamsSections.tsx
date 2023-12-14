import { AppContainer } from "../layout/AppContainer";
import Image from "next/image";
import data from "../../data/fo4/mock.json";

export const Fo4TeamsSections = () => {
  return (
    <div id={"teams"}>
      <AppContainer>
        <div className="md:w-2/3 lg:w-1/2">
          <h2 className="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
            Teams
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Following the selection process and team division draw, we now have
            16 representatives ready for the tournament. Let&apos;s unite and
            support each other on our journey towards the championship.
            Together, we can achieve victory for all!
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Object.values(data.teams)?.map((team) => (
            <div
              id={`team-${team.id}`}
              key={team.id}
              className="group relative overflow-hidden rounded-2xl"
            >
              <Image
                priority
                src={team.image}
                alt={team.name}
                width={1000}
                height={1593}
                className="h-auto w-full object-cover object-top transition duration-500 group-hover:scale-150 group-hover:translate-y-10"
              />
            </div>
          ))}
        </div>
      </AppContainer>
    </div>
  );
};
