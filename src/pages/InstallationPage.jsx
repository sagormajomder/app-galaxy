import { useState } from "react";
import AppsHeading from "../components/AppsHeading";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

export default function InstallationPage() {
  const [sortBy, setSortBy] = useState("select");
  return (
    <section className="py-14">
      <Container style="space-y-10">
        <SectionTitle
          title="Your Installed Apps"
          desc="Review all applications currently installed that were developed by us"
        />
        <AppsHeading totalApp="0" sortBy={sortBy} onSortBy={setSortBy} />
      </Container>
    </section>
  );
}
