import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ROUTES } from "../../shared/routes";
import { useTheme } from "../hooks/useTheme";
import { DarkModeToggle } from "./DarkModeToggle";

export default function PageHeader() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 z-10 w-full flex flex-row items-center justify-between px-4 bg-white dark:bg-[#16171d] transition-all duration-300 ease-in-out ${
          scrolled ? "h-14" : "h-20"
        }`}
      >
        <div
          onClick={() => navigate(ROUTES.HOME)}
          className="cursor-pointer flex items-center"
        >
          <img
            className={`w-auto object-contain transition-all duration-300 ease-in-out ${
              scrolled ? "h-6" : "h-9"
            }`}
            src={
              theme === "light"
                ? "/logo/LogoName_Blue_Large.png"
                : "/logo/LogoName_Orange_Large.png"
            }
          />
        </div>
        <div className="flex flex-row gap-4">
          <button onClick={() => navigate(ROUTES.ABOUT)}>About</button>
          <button onClick={() => navigate(ROUTES.BLOG)}>Blog</button>
          <button onClick={() => navigate(ROUTES.RESUME)}>Resume</button>
          <button onClick={() => navigate(ROUTES.CONTACT)}>Contact</button>
          <DarkModeToggle checked={theme === "dark"} onChange={toggleTheme} />
        </div>
      </div>

      {/* Spacer: reserves space in normal flow so content doesn't hide under the fixed header */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          scrolled ? "h-14" : "h-28"
        }`}
      />
    </>
  );
}
