"use client";

import FlipCard from "react-countdown-flip-card";

export interface CountdownFlipCardProps {
  readonly days: number;
  readonly hours: number;
  readonly minutes: number;
  readonly seconds: number;
}
export const CountdownFlipCard = ({
  days,
  hours,
  minutes,
  seconds,
}: CountdownFlipCardProps) => {
  const getDigits = (value: number): [string, string] => {
    if (value < 10) {
      return ["0", value.toString()];
    }
    const strValue = String(value);
    return [strValue[0], strValue[1]];
  };
  return (
    <div className="flex flex-row space-x-6 scale-50 md:scale-75 lg:scale-100">
      <div className="flex flex-col items-center space-y-2">
        <div className="flex flex-row space-x-1">
          <FlipCard
            digit={getDigits(days)[0]}
            width={60}
            height={80}
            className="text-5xl font-bold"
          />
          <FlipCard
            digit={getDigits(days)[1]}
            width={60}
            height={80}
            className="text-5xl font-bold"
          />
        </div>
        <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">
          {days > 1 ? "Days" : "Day"}
        </h2>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <div className="flex flex-row space-x-1">
          <FlipCard
            digit={getDigits(hours)[0]}
            width={60}
            height={80}
            className="text-5xl font-bold"
          />
          <FlipCard
            digit={getDigits(hours)[1]}
            width={60}
            height={80}
            className="text-5xl font-bold"
          />
        </div>
        <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">
          {hours > 1 ? "Hours" : "Hour"}
        </h2>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <div className="flex flex-row space-x-1">
          <FlipCard
            digit={getDigits(minutes)[0]}
            width={60}
            height={80}
            className="text-5xl font-bold"
          />
          <FlipCard
            digit={getDigits(minutes)[1]}
            width={60}
            height={80}
            className="text-5xl font-bold"
          />
        </div>
        <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">
          {minutes > 1 ? "Minutes" : "Minute"}
        </h2>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <div className="flex flex-row space-x-1">
          <FlipCard
            digit={getDigits(seconds)[0]}
            width={60}
            height={80}
            className="text-5xl font-bold"
          />
          <FlipCard
            digit={getDigits(seconds)[1]}
            width={60}
            height={80}
            className="text-5xl font-bold"
          />
        </div>
        <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">
          {seconds > 1 ? "Seconds" : "Second"}
        </h2>
      </div>
    </div>
  );
};
