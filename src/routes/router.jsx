import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
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
      },
      {
        path: "apps",
        Component: AppsPage,
      },
      {
        path: "installation",
        Component: InstallationPage,
      },
    ],
  },
]);

export default router;
