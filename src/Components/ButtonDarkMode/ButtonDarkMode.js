import { useState, useEffect, useRef } from "react";

import "./Style.css";

import sun from "./sun.svg";
import moon from "./moon.svg";

const ButtonDarkButon = () => {
  const [themeMode, setThemeMode] = useState("light");
  const buttonRef = useRef(null);
  useEffect(() => {
    if (themeMode === "dark") {
      document.body.classList.add("dark");
      buttonRef.current.classList.add("dark-mode-btn--active");
    } else {
      document.body.classList.remove("dark");
      buttonRef.current.classList.remove("dark-mode-btn--active");
    }
  }, [themeMode]);
  const toggleDarkMode = () => {
    setThemeMode((current) => {
      return current === "light" ? "dark" : "light";
    });
  };
  return (
    <button ref={buttonRef} className="dark-mode-btn" onClick={toggleDarkMode}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};

export default ButtonDarkButon;
