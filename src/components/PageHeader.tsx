export default function PageHeader() {
  return (
    <div className="flex flex-row w-full items-baseline justify-between px-4">
      <h1>TadDecker.com</h1>
      <div className="flex flex-row gap-4">
        <button>About</button>
        <button>Contact</button>
      </div>
    </div>
  );
}
