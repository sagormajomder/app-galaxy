import { useState } from "react";
import { useLoaderData } from "react-router";
import AppsHeading from "../components/AppsHeading";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { localGetInstalledApp, localUpdateInstalledApp } from "../utils/utils";

import { toast } from "react-toastify";
import InstalledAppsContainer from "../components/InstalledAppsContainer";
import NotFoundApps from "../components/NotFoundApps";

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
    const updatedInstalledApp = sortedInstalledApp.filter(
      (app) => app.id !== id,
    );
    setInstalledApp(updatedInstalledApp);
    localUpdateInstalledApp(updatedInstalledApp);
    // Toast Message
    const appName = sortedInstalledApp
      .find((app) => app.id === id)
      .title.split("-")[0];
    toast.success(`${appName} is successfully uninstall!`);
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
        {sortedInstalledApp.length === 0 ? (
          <NotFoundApps
            message="No Installed Apps Found"
            buttonText="Explore Apps"
          />
        ) : (
          <InstalledAppsContainer
            apps={sortedInstalledApp}
            onRemoveApp={handleRemoveApp}
          />
        )}
      </Container>
    </section>
  );
}
