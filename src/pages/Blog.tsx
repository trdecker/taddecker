import { useEffect, useState } from "react";
import type { BlogPost } from "../../shared/types";
import { getBlogPosts } from "../api/BlogPost";
import { Link } from "react-router-dom";
import { ROUTES } from "../../shared/routes";

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    async function loadMostRecent() {
      try {
        const mostRecent = await getBlogPosts();
        setBlogPosts(mostRecent);
      } catch (e) {
        console.error(e);
      }
    }

    loadMostRecent();
  }, []);

  return (<div className="flex flex-col p-4 md:p-8 lg:p-12">
    <h1 className="pt-16">Blog</h1>

      <div className="flex flex-col justify-center mt-8">
        {!blogPosts.length && 'No posts yet'}
        {blogPosts.map(post =>
          <Link
            key={post.id}
            to={`${ROUTES}/${post.slug}`}
          >
            {post.title}
          </Link>
        )}
      </div>
  </div>);
}