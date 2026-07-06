import { Outlet } from "react-router-dom";
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";

export default function PageLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader />
      <main className="flex-grow">
        <Outlet />
      </main>
      <PageFooter />
    </div>
  );
}
