import { useState } from "react";
import { useLoaderData } from "react-router";
import AppsContainer from "../components/AppsContainer";
import AppsHeading from "../components/AppsHeading";
import Container from "../components/Container";
import SectionTitle from "./../components/SectionTitle";
import NoAppError from "./NoAppError";

export default function AppsPage() {
  const data = useLoaderData();
  const [search, setSearch] = useState("");
  const [totalData, setTotalData] = useState(data.length);

  if (totalData === 0) {
    return <NoAppError />;
  }

  return (
    <section className="py-14">
      <Container style="space-y-10">
        <SectionTitle
          title="Our All Applications"
          desc="Explore All Apps on the Market developed by us. We code for Millions"
        />
        {/* Search and Title */}
        <AppsHeading
          totalApp={totalData}
          search={search}
          onSearch={setSearch}
        />
        {/* Apps Container */}
        <AppsContainer data={data} search={search} onTotalData={setTotalData} />
      </Container>
    </section>
  );
}
