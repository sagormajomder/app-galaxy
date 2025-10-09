import { useState } from "react";
import { useLoaderData } from "react-router";
import AppsHeading from "../components/AppsHeading";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { localGetInstalledApp } from "../utils/utils";

import InstalledAppsContainer from "../components/InstalledAppsContainer";

export default function InstallationPage() {
  const data = useLoaderData();
  const [sortBy, setSortBy] = useState("select");
  const [installedApp, setInstalledApp] = useState(() => {
    const installAppIds = localGetInstalledApp();
    return data.filter((app) => installAppIds.some((id) => id === app.id));
  });

  // Sorting Apps by download count
  let sortedInstalledApp = installedApp;
  if (sortBy === "high") {
    sortedInstalledApp = installedApp.toSorted(
      (a, b) => b.downloads - a.downloads,
    );
  } else if (sortBy === "low") {
    sortedInstalledApp = installedApp.toSorted(
      (a, b) => a.downloads - b.downloads,
    );
  }

  function handleRemoveApp(id) {
    console.log(id);

    const updatedInstalledApp = sortedInstalledApp.filter(
      (app) => app.id !== id,
    );
    setInstalledApp(updatedInstalledApp);
    localStorage.setItem(
      "installedApp",
      JSON.stringify(updatedInstalledApp.map((app) => app.id)),
    );
  }

  return (
    <section className="py-14">
      <Container style="space-y-10">
        <SectionTitle
          title="Your Installed Apps"
          desc="Review all applications currently installed that were developed by us"
        />
        <AppsHeading
          totalApp={sortedInstalledApp.length}
          sortBy={sortBy}
          onSortBy={setSortBy}
        />
        <InstalledAppsContainer
          apps={sortedInstalledApp}
          onRemoveApp={handleRemoveApp}
        />
      </Container>
    </section>
  );
}
