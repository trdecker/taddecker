import { Link } from "react-router-dom";
import { ROUTES } from "../../shared/routes";

export default function AboutPage() {

  return (<div className="flex flex-col p-4 md:p-8 lg:p-12">
    <h1 className="pt-16">About</h1>

    <div className="grid grid-cols-2 mt-8 h-">
      <div className="flex flex-col justify-center mb-8">
        <span>• Web Developer</span>
        <span>• Masters Student</span>
        <span>• Family Man</span>
      </div>
      <div>
        <img className="border-2 rounded-xl" src="/images/me_with_bird.jpg" />
        <i>An unflattering image of me with a peacock</i>
      </div>
    </div>

    <div className="mt-16">
      <h1>Other Stuff</h1>

      <div className="flex flex-col">
        <a href="/resume.pdf" download="resume.pdf">My Resume</a>
        <Link to={ROUTES.CONTACT}>Contact Me</Link>
        <Link to={ROUTES.ABOUT_SITE} className="hover:underline">How I made this website</Link>
        <Link to={ROUTES.BLOG}>I write! Check it out</Link>
      </div>
    </div>

  </div>);
}