"use client";
import { Match } from "@/models/Match";
import { format } from "date-fns";
import Image from "next/image";
import Countdown from "react-countdown";
export interface MatchCardProps {
  match: Match;
}
export const MatchCard = ({ match }: MatchCardProps) => {
  return (
    <div className="aspect-auto p-6 md:p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none hover:shadow transition">
      <div className="flex flex-col gap-6">
        <div>
          <h6 className="text-sm md:text-md font-medium text-gray-700 dark:text-white">
            {match.type}
          </h6>
          <p className="text-xs md:text-sm text-gray-400 dark:text-gray-300">
            {format(new Date(match.startAt), "p dd/MM/yyyy")}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between gap-4">
          {match.teamA.detail ? (
            <div className="w-2/5 flex flex-row gap-4 justify-start items-center">
              <Image
                src={match.teamA.detail.teamLogo}
                alt={match.teamA.detail.teamName}
                loading="lazy"
                width="320"
                height="200"
                className="h-8 md:h-12 w-8 md:w-16 object-cover object-center rounded-lg border border-gray-100 dark:border-gray-700"
              />
              <div>
                <a
                  href={`#team-${match.teamA.id}`}
                  className="text-sm md:text-md font-medium text-gray-900 dark:text-white hover:text-primary transition"
                >
                  {match.teamA.detail.name}
                </a>
                <p className="text-xs md:text-sm font-thin text-gray-800 dark:text-gray-300">
                  {match.teamA.detail.teamName}
                </p>
              </div>
            </div>
          ) : (
            <div className="w-2/5 text-sm md:text-md text-left">
              {match.teamA.placeholder}
            </div>
          )}
          <div className="w-1/5">
            {match.teamA.scores !== null && match.teamB.scores !== null ? (
              <div className="w-full p-2 text-sm md:text-md text-center font-semibold text-primary border bg-primary/10 border-primary rounded-3xl">
                {`${match.teamA.scores} - ${match.teamB.scores}`}
              </div>
            ) : (
              <div className="w-full p-2 text-sm md:text-md text-center font-semibold text-secondary border bg-secondary/10 border-secondary rounded-3xl">
                <Countdown
                  date={new Date(match.startAt)}
                  renderer={({ completed, days, hours, minutes, seconds }) =>
                    completed
                      ? "Started"
                      : `${days}:${hours}:${minutes}:${seconds}`
                  }
                />
              </div>
            )}
          </div>

          {match.teamB.detail ? (
            <div className="w-2/5 flex flex-row gap-4 justify-end items-center">
              <div>
                <a
                  href={`#team-${match.teamB.id}`}
                  className="text-sm md:text-md font-medium text-gray-900 dark:text-white hover:text-primary transition"
                >
                  {match.teamB.detail.name}
                </a>
                <p className="text-xs md:text-sm font-thin text-gray-800 dark:text-gray-300">
                  {match.teamB.detail.teamName}
                </p>
              </div>
              <Image
                src={match.teamB.detail.teamLogo}
                alt={match.teamB.detail.teamName}
                loading="lazy"
                width="320"
                height="200"
                className="h-8 md:h-12 w-8 md:w-16 object-cover object-center rounded-lg border border-gray-100 dark:border-gray-700"
              />
            </div>
          ) : (
            <div className="w-2/5 text-sm md:text-md text-right">
              {match.teamB.placeholder}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
