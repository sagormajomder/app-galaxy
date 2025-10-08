import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import AppDetailsPage from "../pages/AppDetailsPage";
import AppsPage from "../pages/AppsPage";
import HomePage from "../pages/HomePage";
import InstallationPage from "../pages/InstallationPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
        loader: async () => fetch("../appData.json"),
      },
      {
        path: "apps",
        Component: AppsPage,
      },
      {
        path: "installation",
        Component: InstallationPage,
      },
      {
        path: "appDetails/:id",
        Component: AppDetailsPage,
        loader: async () => fetch("../appData.json"),
      },
    ],
  },
]);

export default router;
