import { useLoaderData } from "react-router";
import appStoreIcon from "../assets/app-store.png";
import googlePlayIcon from "../assets/google-play.png";
import heroImage from "../assets/hero.png";

import AppsContainer from "../components/AppsContainer";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import LinkButton from "./../components/LinkButton";

export default function HomePage() {
  const data = useLoaderData();
  const trendingApps = data.slice(0, 8);

  return (
    <>
      <Container>
        {/* Hero Section */}
        <section className="mx-auto flex max-w-[51.25rem] flex-col items-center pt-14 text-center">
          <h1 className="heading-1">
            We Build <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}
              Productive{" "}
            </span>
            Apps
          </h1>
          <p className="mb-10">
            At APPGALAXY, we craft innovative apps designed to make everyday
            life simpler, smarter, and more exciting. Our goal is to turn your
            ideas into digital experiences that truly make an impact.
          </p>
          <div className="xs:flex-row xs:gap-4 mb-10 flex flex-col gap-2 transition duration-300">
            <LinkButton
              styles="border border-gray-300 hover:bg-gray-200 transition duration-300"
              target="_blank"
              to="https://play.google.com/store/games?hl=en"
            >
              <img
                className="h-8 object-contain"
                src={googlePlayIcon}
                alt="Google Play Icon"
              />
              <span className="text-heading font-semibold">Google Play</span>
            </LinkButton>

            <LinkButton
              styles="border border-gray-300 hover:bg-gray-200 transition duration-300"
              target="_blank"
              to="https://www.apple.com/app-store/"
            >
              <img
                className="h-8 object-contain"
                src={appStoreIcon}
                alt="App Store Icon"
              />
              <span className="text-heading font-semibold">App Store</span>
            </LinkButton>
          </div>
          <figure>
            <img src={heroImage} alt="Website hero image" />
          </figure>
        </section>
      </Container>
      {/* State Section */}
      <section className="bg-gradient-primary space-y-10 py-14 text-center text-white">
        <h2 className="heading-2 text-white">
          Trusted by Millions, Built for You
        </h2>
        {/* States */}
        <div className="mx-auto flex max-w-[51.25rem] flex-col justify-between gap-3 sm:flex-row sm:gap-0">
          {/* state 1 */}
          <div className="space-y-2 p-4 sm:space-y-4">
            <p className="opacity-80">Total Downloads</p>
            <p className="text-6xl font-bold tracking-wide">29.6M</p>
            <p className="opacity-80">21% more than last month</p>
          </div>
          {/* state 2 */}
          <div className="space-y-2 p-4 sm:space-y-4">
            <p className="opacity-80">Total Reviews</p>
            <p className="text-6xl font-bold tracking-wide">906K</p>
            <p className="opacity-80">46% more than last month</p>
          </div>
          {/* state 3 */}
          <div className="space-y-2 p-4 sm:space-y-4">
            <p className="opacity-80">Active Apps</p>
            <p className="text-6xl font-bold tracking-wide">132+</p>
            <p className="opacity-80">31 more will Launch</p>
          </div>
        </div>
      </section>
      {/* Trendign Apps Section */}
      <section className="py-14">
        <Container style="space-y-10">
          <SectionTitle
            title="Trending Apps"
            desc="Explore All Trending Apps on the Market developed by us"
          />
          {/* Trending Apps */}
          <AppsContainer data={trendingApps} />
          <LinkButton
            styles="bg-gradient-primary text-center text-white max-w-fit mx-auto"
            to="/apps"
          >
            Show All
          </LinkButton>
        </Container>
      </section>
    </>
  );
}
