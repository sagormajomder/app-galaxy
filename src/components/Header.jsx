import { Link, NavLink } from "react-router";
import gitLogo from "../assets/git.png";
import logo from "../assets/logo.png";
import LinkButton from "./LinkButton";

export default function Header() {
  const menu = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="apps">Apps</NavLink>
      </li>
      <li>
        <NavLink to="installation">Installation</NavLink>
      </li>
    </>
  );

  return (
    <header className="bg-base-100 shadow-sm">
      <nav className="navbar mx-auto max-w-7xl px-5">
        {/* Navbar Start */}
        <div className="navbar-start xs:basis-auto basis-full">
          <div className="dropdown">
            {/* Humberger Logo */}
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {/* Mobile Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 font-semibold shadow"
            >
              {menu}
              <LinkButton styles="xs:hidden" to="">
                <img
                  className="h-5 object-contain"
                  src={gitLogo}
                  alt="Git logo image"
                />
                <span className="font-semibold text-white">Contribute</span>
              </LinkButton>
            </ul>
          </div>
          {/* Logo */}
          <Link
            to="/"
            className="bg-gradient-primary flex items-center gap-1 bg-clip-text text-xl font-bold text-transparent uppercase"
          >
            <img className="h-10" src={logo} alt="Logo" /> AppGalaxy
          </Link>
        </div>
        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base font-semibold">
            {menu}
          </ul>
        </div>
        {/* Navbar End */}
        <div className="navbar-end xs:flex hidden">
          <LinkButton to="">
            <img
              className="h-5 object-contain"
              src={gitLogo}
              alt="Git logo image"
            />
            <span className="font-semibold text-white">Contribute</span>
          </LinkButton>
        </div>
      </nav>
    </header>
  );
}
