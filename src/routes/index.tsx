import { Route, Routes } from "react-router-dom";
import PageLayout from "../components/Layout";
import HomePage from "../pages/Home";
import ContactPage from "../pages/Contact";
import AboutPage from "../pages/About";
import NotFoundPage from "../pages/NotFound";
import { ROUTES } from "../../shared/routes";
import BlogPage from "../pages/Blog";
import ResumePage from "../pages/Resume";
import BlogPostPage from "../pages/BlogPost";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.RESUME} element={<ResumePage />} />
        <Route path={ROUTES.BLOG}>
          <Route index element={<BlogPage />} />
          <Route path={ROUTES.BLOG_POST} element={<BlogPostPage />} />
        </Route>
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />

        {/* 404 page */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
