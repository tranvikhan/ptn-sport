import { GroupScores } from "@/models/GroupScores";
import { Team } from "@/models/Team";
import Image from "next/image";

export interface GroupCardProps {
  groupScores: GroupScores;
  teams: {
    [key in string]: Team;
  };
}
export const GroupScoresCard = ({ groupScores, teams }: GroupCardProps) => {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl">
        {groupScores.groupName}
      </p>
      <div className="p-4 border border-gray-100 rounded bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none hover:shadow transition">
        <table className="w-full overflow-x-auto table-auto border-collapse text-gray-600 dark:text-gray-300 text-base">
          <thead className="text-gray-400 dark:text-gray-500">
            <tr>
              <th className="w-auto min-w-[140px] text-left py-2 font-medium">
                Team
              </th>
              <th className="w-10  text-left py-2 font-medium">W</th>
              <th className="w-10  text-left py-2 font-medium">D</th>
              <th className="w-10  text-left py-2 font-medium">L</th>
              <th className="w-10  text-left py-2 font-medium">GF</th>
              <th className="w-10  text-left py-2 font-medium">GA</th>
              <th className="w-10  text-left py-2 font-medium">GD</th>
              <th className="w-10  text-left py-2 font-medium">Pts</th>
            </tr>
          </thead>
          <tbody>
            {groupScores.teams.map((teamScore, index) => {
              const team = teams[teamScore.id];

              return (
                <tr
                  key={teamScore.id}
                  className={`border-t border-gray-100 dark:border-gray-800`}
                >
                  <td className="text-left py-2 font-thin">
                    <div className="flex items-center gap-2">
                      <Image
                        src={team.teamLogo}
                        alt={team.teamName}
                        loading="lazy"
                        width="320"
                        height="200"
                        className="h-8 w-10 object-cover object-center rounded-lg border border-gray-100 dark:border-gray-700"
                      />
                      <div className="flex flex-col">
                        <a
                          href={`#team-${team.id}`}
                          className="text-sm font-medium text-gray-900 dark:text-white hover:text-primary transition"
                        >
                          {team.name}
                        </a>
                        <p className="text-xs font-thin text-gray-800 dark:text-gray-300">
                          {team.teamName}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="text-left py-2 font-thin">{teamScore.w}</td>
                  <td className="text-left py-2 font-thin">{teamScore.d}</td>
                  <td className="text-left py-2 font-thin">{teamScore.l}</td>
                  <td className="text-left py-2 font-thin">{teamScore.gf}</td>
                  <td className="text-left py-2 font-thin">{teamScore.ga}</td>
                  <td className="text-left py-2 font-thin">{teamScore.gd}</td>
                  <td className="text-left py-2 font-thin">{teamScore.pts}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
