import { useLoaderData } from "react-router";

import HeroSection from "../components/HomePage/HeroSection";
import StateSection from "../components/HomePage/StateSection";
import TrendingAppsSection from "../components/HomePage/TrendingAppsSection";

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
