import AppsContainer from "../AppsContainer";
import Container from "../Container";
import LinkButton from "../LinkButton";
import SectionTitle from "../SectionTitle";

export default function TrendingAppsSection({ trendingApps }) {
  return (
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
  );
}
