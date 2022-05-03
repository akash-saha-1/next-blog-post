import React, { useState } from "react";
import DarkTheme from "./DarkTheme";

function loadDarkMode() {
  if (typeof localStorage === "undefined") return false;
  const value = sessionStorage.getItem("darkMode");
  return value === null ? false : JSON.parse(value);
}

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(loadDarkMode);
  const text = darkMode ? "Light Mode" : "Dark Mode";

  const handleClick = () => {
    sessionStorage.setItem("darkMode", JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  };

  return (
    <>
      <button onClick={handleClick} suppressHydrationWarning>
        {text}
      </button>
      <style jsx>{`
        button {
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
          font-size: larger;
        }
      `}</style>
      {darkMode && <DarkTheme />}
    </>
  );
};

export default ThemeSwitch;
