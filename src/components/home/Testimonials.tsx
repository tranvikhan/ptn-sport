import Image from "next/image";
import { Container } from "../layout/Container";

export const Testimonials = () => {
  return (
    <div className="text-gray-600 dark:text-gray-300" id="testimonials">
      <Container>
        <div className="mb-20 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            We have some fans.
          </h2>
        </div>
        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <Image
                className="w-12 h-12 rounded-full"
                src="/images/avatars/duy-vo.jpg"
                alt="user avatar"
                width="400"
                height="400"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Duy Vo
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Delivery Manager
                </p>
              </div>
            </div>
            <p className="mt-8">
              PTN Global Sports is the epitome of excellence in the world of
              sports. Their dedication to providing top-notch sporting events
              and experiences is truly commendable. Keep up the amazing work!
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <Image
                className="w-12 h-12 rounded-full"
                src="/images/avatars/tan-tran.jpg"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Tan Tran
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Developer
                </p>
              </div>
            </div>
            <p className="mt-8">
              I am constantly impressed by the caliber of events organized by
              PTN Global Sports. They consistently bring together top athletes
              from around the world, creating memorable and thrilling moments
              for sports enthusiasts everywhere.
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <Image
                className="w-12 h-12 rounded-full"
                src="/images/avatars/vu-nguyen.jpg"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Vu Nguyen
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Developer
                </p>
              </div>
            </div>
            <p className="mt-8">
              PTN Global Sports sets the bar high when it comes to delivering
              high-quality sports events. Their attention to detail, seamless
              organization, and commitment to creating a fantastic experience
              for participants and spectators alike are truly praiseworthy.
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <Image
                className="w-12 h-12 rounded-full"
                src="/images/avatars/khan-tran.jpg"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Khan Tran
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Developer
                </p>
              </div>
            </div>
            <p className="mt-8">
              Kudos to PTN Global Sports for their unwavering commitment to
              promoting sportsmanship and fair play. They not only showcase
              incredible athletic talent but also uphold the values that make
              sports a force for positive change in society.
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <Image
                className="w-12 h-12 rounded-full"
                src="/images/avatars/hau-dang.jpg"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Hau Dang
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Developer
                </p>
              </div>
            </div>
            <p className="mt-8">
              I&apos;ve had the pleasure of attending several PTN Global Sports
              events, and each time, I have been blown away by the level of
              professionalism and excitement they bring to the table. Thank you
              for continuously raising the bar and delivering exceptional sports
              experiences.
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <Image
                className="w-12 h-12 rounded-full"
                src="/images/avatars/y-nguyen.jpg"
                alt="user avatar"
                width="400"
                height="400"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Y Nguyen
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Talent Acquisition
                </p>
              </div>
            </div>
            <p className="mt-8">
              PTN Global Sports has a knack for creating a vibrant and inclusive
              atmosphere at their events. Whether you&apos;re a professional
              athlete or a passionate fan, you can&apos;t help but be swept away
              by the energy and camaraderie they foster.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
