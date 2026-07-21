import { Link } from "react-router-dom";
import { ROUTES } from "../../shared/routes";

export default function HomePage() {
  return (
    <div className="p-2 sm:p-8 md:p-12 flex flex-col items-center mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 h-[50vh]">
        <div className="flex flex-col justify-center">
          <h1>TadDecker</h1>
        </div>
        <div className="flex flex-col justify-center">
          <p>Developer.</p>
          <p>Innovator.</p>
          <p>Family Man.</p>
        </div>

      </div>


      <img src="/images/me_rock_climbing.png" className="rounded-xl border-2 w-[75%]" />
      <i>Me rock climbing</i>


      <div className="flex flex-col mt-24">
        <a href="/resume.pdf" download="resume.pdf">My Resume</a>
        <Link to={ROUTES.CONTACT}>Contact Me</Link>
        <Link to={ROUTES.ABOUT_SITE} className="hover:underline">How I made this website</Link>
        {/* <Link to={ROUTES.BLOG}>I write! Check it out</Link> */}
      </div>
    </div>
  );
}
