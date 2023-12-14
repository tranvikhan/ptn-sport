import Image from "next/image";
import { AppContainer } from "../layout/AppContainer";
import { football2023WinterMock } from "@/data/football/2023/winter/mock";
import { Users } from "react-feather";

export const FootballTeamSection = () => {
  return (
    <div id="teams">
      <AppContainer>
        <div className="md:w-2/3 lg:w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-primary"
          >
            <path
              fillRule="evenodd"
              d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
              clipRule="evenodd"
            />
          </svg>

          <h2 className="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
            Teams
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Discover the corporate giants competing in the PTN Global Football
            Winter Cup 2023. Watch as these top-tier teams bring their best to
            the winter pitch, showcasing skill, teamwork, and the drive for
            victory. Get ready for a thrilling tournament as each team competes
            for the ultimate glory on this icy battleground.
          </p>
        </div>
        <div className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          {Object.values(football2023WinterMock.teams).map((team, index) => (
            <div
              key={team.id}
              className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
            >
              <div className="relative space-y-6 py-12 p-8">
                <Image
                  priority
                  src={team.logo}
                  alt="Football"
                  width={120}
                  height={120}
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <h2
                    className={`text-2xl font-semibold text-gray-700 dark:text-white transition group-hover:text-primary`}
                  >
                    {team.name}
                  </h2>
                  <h3 className="mt-2 font-light text-xl text-gray-900 dark:text-gray-200">
                    {`Team ${team.index}`}
                  </h3>
                  <Users className="mt-8 mb-2 text-gray-600 dark:text-gray-300" />
                  <div className="flex flex-col space-y-1">
                    {team.members.map((member, index) => (
                      <p
                        key={index}
                        className="text-gray-600 dark:text-gray-300"
                      >
                        {member}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AppContainer>
    </div>
  );
};
