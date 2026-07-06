export default function PageFooter() {
  return (
    <div className="flex flex-col my-2">
      <span>Work in progress.</span>
      <div>Copyright © 2026 Tad Decker</div>
      <div>
        <a href={String(import.meta.env.VITE_GITHUB_URL)} target="_blank">
          Github
        </a>{" "}
        |{" "}
        <a href={String(import.meta.env.VITE_LINKEDIN_URL)} target="_blank">
          LinkedIn
        </a>
        {/* |{" "}
        <a href="" target="_blank">
          Resume
        </a> */}
      </div>
    </div>
  );
}
