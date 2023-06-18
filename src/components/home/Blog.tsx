import Image from "next/image";
import { Container } from "../layout/Container";

export const Blog = () => {
  return (
    <div id="blog">
      <Container>
        <div className="mb-12 space-y-2 text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
            Latest Activities
          </h2>
          <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
            We regularly organize tournaments for members to show off their
            skills. Follow our activities
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="https://i.ibb.co/G9LJPCs/Banner-Small.png"
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Fifa Online 4 - 2023
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300 line-clamp-3">
                Following the selection process and team division draw, we now
                have 16 representatives ready for the tournament. Let&apos;s
                unite and support each other on our journey towards the
                championship.
              </p>
              <a className="inline-block" href="#">
                <span className="text-info dark:text-blue-300">Read more</span>
              </a>
            </div>
          </div>
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="https://i.ibb.co/L0Nhm9y/Microsoft-Teams-image-2.png"
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Chess Tournament - 2023
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300 line-clamp-3">
                We are excited to announce the upcoming Chess Tournament, as
                part of our annual Company Trip event. This year, we have
                decided to organize a tournament that includes both Chess and
                Chinese Chess (Xiangqi) to provide an engaging and competitive
                experience for all participants.
              </p>
              <a className="inline-block" href="#">
                <span className="text-info dark:text-blue-300">Read more</span>
              </a>
            </div>
          </div>
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="https://i.ibb.co/K063kb3/Screenshot-2023-06-18-230717.png"
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Football Cup - 2023
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300 line-clamp-3">
                MINIOPS team excellently won the final victory in the first
                soccer tournament of PTN. The two teams ranked behind are
                XUBMARINE and POLYLOTUS
              </p>
              <a
                className="inline-block"
                href="https://ptnfootballcup.vercel.app/"
                target={"_blank"}
              >
                <span className="text-info dark:text-blue-300">
                  Visit home page
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
