import { useNavigate } from "react-router-dom";

export default function PageHeader() {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 z-10 bg-white dark:bg-[#16171d] flex flex-row w-full items-baseline justify-between px-4">
      <h1 className="hover:cursor-pointer" onClick={() => navigate("/")}>
        TadDecker
      </h1>
      <div className="flex flex-row gap-4">
        <button onClick={() => navigate("/about")}>About</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
      </div>
    </div>
  );
}
