import { createBrowserRouter } from "react-router";
import Loader from "../components/Loader";
import RootLayout from "../layouts/RootLayout";
import AppDetailsPage from "../pages/AppDetailsPage";
import AppsPage from "../pages/AppsPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import InstallationPage from "../pages/InstallationPage";
import NoAppError from "../pages/NoAppError";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <Loader />,
    children: [
      {
        index: true,
        Component: HomePage,
        loader: async () => fetch("../appData.json"),
      },
      {
        path: "apps",
        Component: AppsPage,
        loader: async () => fetch("../appData.json"),
      },
      {
        path: "installation",
        Component: InstallationPage,
        loader: async () => fetch("../appData.json"),
      },
      {
        path: "appDetails/:id",
        Component: AppDetailsPage,
        loader: async () => fetch("../appData.json"),
        errorElement: <NoAppError />,
      },
    ],
  },
]);

export default router;
