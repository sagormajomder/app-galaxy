import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <div className="text-body grid min-h-dvh grid-rows-[auto_1fr_auto] bg-[#F5F5F5] text-sm sm:text-base">
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}

function Main({ children }) {
  return <main>{children}</main>;
}
