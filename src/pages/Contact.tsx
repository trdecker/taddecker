const linkedInUrl = import.meta.env.VITE_LINKEDIN_URL;
const githubUrl = import.meta.env.VITE_GITHUB_URL;
const viteEmail = import.meta.env.VITE_EMAIL;

export default function ContactPage() {

  return (<div className="flex flex-col p-4 md:p-8 lg:p-12">
    <h1 className="pt-16">Contact</h1>

      <div className="flex flex-col justify-center mt-8">
        <span>
          LinkedIn:{" "}
          <a className="hover:underline" href={linkedInUrl} target="_blank" rel="noopener noreferrer">{linkedInUrl}</a>
        </span>
        <span>
          Github:{" "}
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">{githubUrl}</a>
        </span>
        <span>
          Email:{" "}
          <a href={`mailto:${viteEmail}`}>{viteEmail}</a>
        </span>
        {/* <Link to={}></Link> */}
      </div>


  </div>);
}