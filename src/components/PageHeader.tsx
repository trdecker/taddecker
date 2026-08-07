import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../shared/routes";
import { useTheme } from "../hooks/useTheme";

export default function PageHeader() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="sticky top-0 z-10 pb-8 bg-white dark:bg-[#16171d] flex flex-row w-full items-baseline justify-between px-4">
      <div onClick={() => navigate(ROUTES.HOME)} className="hover:cursor-pointer h-14 pt-4 pr-4">
        <img
          src={
            theme === 'light'
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
        <button onClick={toggleTheme} aria-label="Toggle theme">
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </div>
  );
}
