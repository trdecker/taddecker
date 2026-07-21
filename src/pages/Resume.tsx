
export default function ResumePage() {

  return (<div className="flex flex-col p-4 md:p-8 lg:p-12">
    <h1 className="pt-16">Resume</h1>

    <iframe
      src="/resume.pdf"
      title="Resume"
      className="w-full h-[85vh] border rounded-lg mt-8"
    />
  </div>);
}