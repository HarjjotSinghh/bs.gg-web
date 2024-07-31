import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";
import { BD, IN, PK } from "country-flag-icons/react/1x1";
import {
  ActivityLogIcon,
  EnvelopeClosedIcon,
  MixIcon,
  Share1Icon
} from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export default function HomePage() {
  return (
    <div className="w-full">
      <Image
        src={"/banner-desktop.png"}
        alt="Banner Image Hero Section"
        width={1920}
        height={1080}
        className="w-full h-auto md:block hidden"
      />
      <Image
        src="/banner-mobile.png"
        alt="Banner Image Hero Section"
        width={856}
        height={812}
        className="w-full h-auto md:hidden block"
      />
      <section className="py-20 bg-primary text-black">
        <div className="container mx-auto text-left">
          <h2 className="md:text-4xl text-3xl font-extrabold tracking-tighter">
            Discover a World of Exciting Opportunities!
          </h2>
          <p className="mt-4 text-lg text-black/60 max-w-4xl text-balance">
            Welcome to BS.GG, the premier platform for all your online
            entertainment needs. Dive into a realm of thrilling experiences
            where every moment is packed with fun, excitement, and endless
            possibilities. Join a vibrant community and take part in various
            engaging activities tailored just for you.
          </p>
        </div>
      </section>
      <section className="bg-primary">
        <div className="mx-auto text-center flex md:flex-row flex-col overflow-hidden items-center justify-start gap-4">
          <div className="relative z-10 md:p-4 md:py-12 py-4 md:px-16 md:pr-24 px-4 ">
            <Image
              className="absolute inset-0 -z-[1] md:origin-center origin-center md:top-0 -top-24 h-full md:rotate-0 rotate-90 md:w-full w-[100dvw] md:block hidden"
              src={"/mask-image.png"}
              alt="Country Banner Image"
              width={1920}
              height={1080}
            ></Image>
            <h2 className="text-2xl text-white font-extrabold tracking-tighter z-20">
              PLEASE CHOOSE <br />
              YOUR COUNTRY
            </h2>
          </div>
          <div className="flex justify-center mt-4 space-x-8 items-center flex-1 md:pb-0 pb-6">
            <div className="flex items-center justify-center gap-1 cursor-pointer flex-col">
              <IN title="India" className="rounded-full size-12" />
              <p className="font-extrabold tracking-tighter">India</p>
            </div>
            <div className="flex items-center justify-center gap-1 cursor-pointer flex-col">
              <BD title="Bangladesh" className="rounded-full size-12" />
              <p className="font-extrabold tracking-tighter">Bangladesh</p>
            </div>
            <div className="flex items-center justify-center gap-1 cursor-pointer flex-col">
              <PK title="Pakistan" className="rounded-full size-12" />
              <p className="font-extrabold tracking-tighter">Pakistan</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="md:text-4xl text-3xl font-extrabold tracking-tighter">
            Why Choose BS.GG?
          </h2>
          <p className="mt-4 text-lg opacity-70 max-w-3xl mx-auto">
            BS.GG offers Asia{"'"}s best online sports trading and gaming
            entertainment. We provide a wide range of advanced online games. Our
            live dealers will ensure you have a fantastic time playing with
            them. We also offer the best variety of Welcome Promotions and
            unlimited Cashback. We provide 24x7 customer support and will
            efficiently resolve any issue you encounter.
          </p>
          <div className="mt-8 gap-8 flex flex-row flex-wrap items-start justify-center">
            <div className="md:p-2 p-1 group rounded-lg flex items-center justify-center flex-col gap-4 basis-full md:basis-[calc(33%-20px)]">
              <Image
                alt="Features Image"
                className="size-16 group-hover:scale-110 transition-all duration-300 ease-in-out"
                width={75}
                height={75}
                src={"/1.png"}
              />
              <h3 className="text-xl font-extrabold tracking-tighter">
                Innovative Experiences
              </h3>
              <p className="opacity-70">
                Immerse yourself in a wide array of interactive and enjoyable
                experiences designed to keep you entertained and engaged.
              </p>
            </div>
            <div className="md:p-2 p-1 group rounded-lg flex items-center justify-center flex-col gap-4 basis-full md:basis-[calc(33%-20px)]">
              <Image
                alt="Features Image"
                className="size-16 group-hover:scale-110 transition-all duration-300 ease-in-out"
                width={75}
                height={75}
                src={"/2.png"}
              />
              <h3 className="text-xl font-extrabold tracking-tighter">
                Exclusive Rewards
              </h3>
              <p className="opacity-70">
                Earn fantastic rewards and special bonuses as you participate
                and achieve milestones.
              </p>
            </div>
            <div className="md:p-2 p-1 group rounded-lg flex items-center justify-center flex-col gap-4 basis-full md:basis-[calc(33%-20px)]">
              <Image
                alt="Features Image"
                className="size-16 group-hover:scale-110 transition-all duration-300 ease-in-out"
                width={75}
                height={75}
                src={"/3.png"}
              />
              <h3 className="text-xl font-extrabold tracking-tighter">
                Seamless User Experience
              </h3>
              <p className="opacity-70">
                Enjoy a user-friendly interface that makes navigating and
                exploring activities a breeze.
              </p>
            </div>
            <div className="md:p-2 p-1 group rounded-lg flex items-center justify-center flex-col gap-4 basis-full md:basis-[calc(33%-20px)]">
              <Image
                alt="Features Image"
                className="size-16 group-hover:scale-110 transition-all duration-300 ease-in-out"
                width={75}
                height={75}
                src={"/4.png"}
              />
              <h3 className="text-xl font-extrabold tracking-tighter">
                Community Engagement
              </h3>
              <p className="opacity-70">
                Connect with like-minded individuals, share experiences, and
                build lasting friendships within our community.
              </p>
            </div>
            <div className="md:p-2 p-1 group rounded-lg flex items-center justify-center flex-col gap-4 basis-full md:basis-[calc(33%-20px)]">
              <Image
                alt="Features Image"
                className="size-16 group-hover:scale-110 transition-all duration-300 ease-in-out"
                width={75}
                height={75}
                src={"/5.png"}
              />
              <h3 className="text-xl font-extrabold tracking-tighter">
                Secure & Reliable
              </h3>
              <p className="opacity-70">
                Your safety and privacy are our top priority. BS.GG offers a
                secure environment for you to enjoy your favorite activities
                without any worries.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary text-black">
        <div className="container mx-auto text-center">
          <h2 className="md:text-4xl text-3xl font-extrabold tracking-tighter">
            How To Get Started
          </h2>
          <section className="text-black body-font">
            <div className="container px-5 py-12 mx-auto flex flex-wrap">
              <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-black/90 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 -ml-1 size-8 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black/90 text-white relative z-10 title-font font-medium text-sm border-[3.5px] border-black/90">
                  1
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-24 h-24 bg-black/90 text-white rounded-full inline-flex items-center justify-center">
                    <EnvelopeClosedIcon className="size-10" />
                  </div>
                  <div className="flex-grow-0 sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-bold tracking-tight text-left text-black mb-1 w-fit text-xl">
                      Sign Up
                    </h2>
                    <p className="leading-relaxed text-black/60 text-left max-w-sm">
                      Create your free account in just a few simple steps. Click
                      the {'"'}Join Now{'"'} button and fill out the
                      registration form to become a member of the BS.GG family.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-black/90 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 -ml-1 size-8 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black/90 text-white relative z-10 title-font font-medium text-sm border-[3.5px] border-black/90">
                  2
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-24 h-24 bg-black/90 text-white rounded-full inline-flex items-center justify-center">
                    <ActivityLogIcon className="size-10" />
                  </div>
                  <div className="flex-grow-0 sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-bold tracking-tight text-left text-black mb-1 w-fit text-xl">
                      Explore Activities
                    </h2>
                    <p className="leading-relaxed text-black/60 text-left max-w-sm">
                      Browse through our extensive collection of engaging
                      activities and find the ones that pique your interest.
                      Whether you enjoy strategy, chance, or skill-based
                      challenges, there{"'"}s something for everyone.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-black/90 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 -ml-1 size-8 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black/90 text-white relative z-10 title-font font-medium text-sm border-[3.5px] border-black/90">
                  3
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-24 h-24 bg-black/90 text-white rounded-full inline-flex items-center justify-center">
                    <MixIcon className="size-10" />
                  </div>
                  <div className="flex-grow-0 sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-bold tracking-tight text-left text-black mb-1 w-fit text-xl">
                      Participate & Enjoy
                    </h2>
                    <p className="leading-relaxed text-black/60 text-left max-w-sm">
                      Dive into the activities you love. The more you
                      participate, the more rewards and recognition you earn.
                      Experience the thrill of achieving new milestones and
                      unlocking exclusive bonuses.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-black/90 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 -ml-1 size-8 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black/90 text-white relative z-10 title-font font-medium text-sm border-[3.5px] border-black/90">
                  4
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-24 h-24 bg-black/90 text-white rounded-full inline-flex items-center justify-center">
                    <Share1Icon className="size-10" />
                  </div>
                  <div className="flex-grow-0 sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-bold tracking-tight text-left text-black mb-1 w-fit text-xl">
                      Connect & Share
                    </h2>
                    <p className="leading-relaxed text-black/60 text-left max-w-sm">
                      Engage with our community. Share your experiences, discuss
                      strategies, and enjoy the camaraderie of fellow
                      enthusiasts. Together, we create a supportive and exciting
                      environment for all.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="md:text-4xl text-3xl font-extrabold tracking-tighter ">
            Join Our Exclusive VIP Club
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto text-pretty">
            Elevate your experience with the BS.GG VIP Club. Enjoy premium
            benefits, personalized rewards, and access to exclusive events. Our
            VIP members are treated to an unparalleled level of service and
            attention. Don{"'"}t miss out on this opportunity to enhance your
            journey with BS.GG
          </p>
        </div>
      </section>
      <section className="py-20 bg-primary text-black">
        <h1 className="md:text-4xl text-3xl font-extrabold tracking-tighter text-center">
          What Our Members Are Saying
        </h1>
        <section className="text-black/60 body-font">
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="size-40 mb-8 object-cover object-center rounded-full inline-block  bg-gray-100 border-none"
                    src="https://media.licdn.com/dms/image/C4D03AQEeEyYzNtDq7g/profile-displayphoto-shrink_400_400/0/1524234561685?e=2147483647&v=beta&t=CJY6IY9Bsqc2kiES7HZmnMo1_uf11zHc9DQ1tyk7R7Y"
                  />
                  <p className="leading-relaxed text-left">
                    {'"'}BS.GG has transformed my online entertainment
                    experience. The variety of activities keeps me coming back
                    for more!{'"'}
                  </p>
                  {/* <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span> */}
                  <h2 className="text-black/70 font-extrabold tracking-tighter title-font tracking-wider text-base mt-2 text-right">
                    ~ Alex P.
                  </h2>
                </div>
              </div>
              <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="size-40 mb-8 object-cover object-center rounded-full inline-block  bg-gray-100 border-none"
                    src="https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-focus-face.jpg?auto=avif,webp&format=jpg&width=944"
                  />
                  <p className="leading-relaxed text-left">
                    {'"'}I love the community aspect of BS.GG. I{"'"}ve made so
                    many friends and the rewards are fantastic!{'"'}
                  </p>
                  {/* <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span> */}
                  <h2 className="text-black/70 font-extrabold tracking-tighter title-font tracking-wider text-base mt-2 text-right">
                    ~ Maria T.
                  </h2>
                </div>
              </div>
              <div className="lg:w-1/3 lg:mb-0 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="size-40 mb-8 object-cover object-center rounded-full inline-block  bg-gray-100 border-none"
                    src="https://media.licdn.com/dms/image/C4E03AQHwDooA-9Hlyg/profile-displayphoto-shrink_400_400/0/1656254145919?e=2147483647&v=beta&t=mqsdKH4w-wDYZoBA9Q5kwOWQDh0CnKhBy1QIzc9rzFs"
                  />
                  <p className="leading-relaxed text-left">
                    {'"'}The VIP Club is a game-changer. The perks and exclusive
                    events are amazing. Highly recommend!{'"'}
                  </p>
                  {/* <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span> */}
                  <h2 className="text-black/70 font-extrabold tracking-tighter title-font tracking-wider text-base mt-2 text-right">
                    ~ John D.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="md:text-4xl text-3xl font-extrabold tracking-tighter">
            Ready To Begin Your Adventure?
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Don{"'"}t wait any longer. Join BS.GG today and embark on a journey
            filled with excitement, rewards, and endless fun. Click the {'"'}
            Join Now{'"'} button and start your adventure!
          </p>
          <Button
            className="mt-8 bg-white text-black hover:bg-white/90 w-full max-w-xs text-base font-semibold"
            variant="ghost"
            size={"lg"}
          >
            Join Now
          </Button>
        </div>
      </section>
      <section className="py-20 container mx-auto text-center bg-primary text-black">
        <h1 className="md:text-4xl text-3xl font-extrabold tracking-tighter text-center">
          Contact Us
        </h1>
        <p className="mt-4 opacity-60 max-w-2xl text-pretty mx-auto">
          Have questions or need assistance? Our friendly support team is here
          to help. Contact us anytime at support@bs.gg or visit our Help Center
          for more information.
        </p>
      </section>
      <footer className="py-8 bg-black">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="text-white/80 hover:text-white hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <FacebookIcon className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <TextIcon className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <InstagramIcon className="w-6 h-6" />
            </a>
          </div>
          <div className="mt-4 text-white/80">
            <p>BS.GG - Where Fun Meets Opportunity</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FacebookIcon(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TextIcon(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  );
}

function TwitterIcon(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
