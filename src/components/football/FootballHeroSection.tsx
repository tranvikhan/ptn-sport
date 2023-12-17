"use client";

import { CountdownFlipCard } from "@/components/core/CountdownFlipCard";
import Image from "next/image";
import { Calendar, ExternalLink, Map } from "react-feather";
import { AppContainer } from "../layout/AppContainer";
import Countdown from "react-countdown";
import { Button } from "@/components/core/Button";

export const FootballHeroSection = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-red-400 dark:from-indigo-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-orange-300 dark:to-indigo-600"></div>
      </div>
      <AppContainer>
        <div className="relative pt-8 ml-auto">
          <div className="lg:w-2/3 flex flex-col gap-8 items-center mx-auto">
            <Image
              priority
              src="/images/football/2023/winter/ball_winter.png"
              alt="Fifa Online 4"
              width={120}
              height={120}
            />
            <h1 className="text-gray-900 dark:text-white font-bold text-2xl md:text-3xl xl:text-5xl text-center">
              PTN Football
            </h1>
            <h1 className="text-primary font-bold text-5xl md:text-6xl xl:text-7xl text-center">
              Winter Cup 2023
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              Welcome to the PTN Global Football Winter Cup 2023 - where the
              world&apos;s passion for football meets the exhilarating spirit of
              winter! Our premier tournament promises a dazzling showcase of
              skill, competition, and camaraderie as top-notch teams vie for
              glory in this unique winter football extravaganza.
            </p>
            <div className="flex flex-col space-y-2 items-center">
              <div className="flex flex-row items-center space-x-2 text-gray-700 dark:text-gray-300">
                <Calendar size={18} strokeWidth={2} />
                <p>18:00 15/12/2023</p>
              </div>
              <div className="flex flex-row items-center space-x-2 text-gray-700 dark:text-gray-300">
                <Map size={18} strokeWidth={2} />
                <a
                  title="Open google map"
                  target="_blank"
                  href="https://maps.app.goo.gl/eBciLioAqU15Q7C57"
                  className="flex flex-row items-center space-x-1 hover:text-primary"
                >
                  <p>Can Tho University Football Grounds</p>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
            <div className="mt-12">
              <Countdown
                date={new Date("2023-12-15 18:00")}
                renderer={({ completed, days, hours, minutes, seconds }) =>
                  completed ? (
                    <div className=" flex flex-wrap justify-center gap-y-4 gap-x-6">
                      <Button href="#teams" variant="secondary">
                        View teams
                      </Button>
                      <Button href="#ranking" variant="primary">
                        View raking
                      </Button>
                    </div>
                  ) : (
                    <CountdownFlipCard
                      days={days}
                      hours={hours}
                      minutes={minutes}
                      seconds={seconds}
                    />
                  )
                }
              />
            </div>
          </div>
        </div>
      </AppContainer>
    </div>
  );
};
