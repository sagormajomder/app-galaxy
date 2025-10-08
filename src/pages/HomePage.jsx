import { useLoaderData } from "react-router";

import AppsContainer from "../components/AppsContainer";
import Container from "../components/Container";
import HeroSection from "../components/HomePage/HeroSection";
import StateSection from "../components/HomePage/StateSection";
import TrendingAppsSection from "../components/HomePage/TrendingAppsSection";
import SectionTitle from "../components/SectionTitle";
import LinkButton from "./../components/LinkButton";

export default function HomePage() {
  const data = useLoaderData();
  const trendingApps = data.slice(0, 8);

  return (
    <>
      <HeroSection />
      <StateSection />
      <TrendingAppsSection trendingApps={trendingApps} />
    </>
  );
}
