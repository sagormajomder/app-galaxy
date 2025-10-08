import { useLoaderData } from "react-router";
import AppsContainer from "../components/AppsContainer";
import AppsHeading from "../components/AppsHeading";
import Container from "../components/Container";
import SectionTitle from "./../components/SectionTitle";

export default function AppsPage() {
  const data = useLoaderData();
  return (
    <section className="py-14">
      <Container style="space-y-10">
        <SectionTitle
          title="Our All Applications"
          desc="Explore All Apps on the Market developed by us. We code for Millions"
        />
        {/* Search and Title */}
        <AppsHeading totalApp={data.length} />
        {/* Apps Container */}
        <AppsContainer data={data} />
      </Container>
    </section>
  );
}
