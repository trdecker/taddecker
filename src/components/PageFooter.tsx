import { useTheme } from "../hooks/useTheme";

export default function PageFooter() {
  const { theme } = useTheme();
  return (
    <div className="flex pb-6 flex-col items-center justify-center my-2">
      <div className="grid grid-cols-2">
        <img
          className={
            "h-[4rem] border-r-2 px-12 " +
            (theme === "light" ? "border-gray-300" : "")
          }
          src={
            theme === "light"
              ? "/logo/LogoInitial_Blue.png"
              : "/logo/LogoInitial_Orange.png"
          }
        />

        <div className="flex flex-col pl-6 justify-center">
          <div>Work in progress.</div>
          <div>Copyright © 2026 Tad Decker</div>
          <div>
            <a href={String(import.meta.env.VITE_GITHUB_URL)} target="_blank">
              Github
            </a>{" "}
            |{" "}
            <a href={String(import.meta.env.VITE_LINKEDIN_URL)} target="_blank">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
