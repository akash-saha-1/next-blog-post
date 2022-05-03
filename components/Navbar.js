import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
//import ThemeSwitch from "./ThemeSwitch";

// below different type of import due to diffrent value in sever render and browser render for the first time.
//dynamic means it will render during browser runtime not in prerender
const ThemeSwitch = dynamic(() => import("./ThemeSwitch"), { ssr: false });

const Navbar = () => {
  return (
    <nav className="NavBar">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <ThemeSwitch />
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          display: inline;
          margin-left: 0.75rem;
        }
        li:not(:first-child) {
          margin-left: 0.75rem;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
