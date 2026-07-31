import { useEffect, useState } from "react";
import type { BlogPost } from "../../shared/types";
import { getBlogPosts } from "../api/BlogPost";
import { Link } from "react-router-dom";

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

  function formatDate(dateString: string) {
    return (new Date(dateString)).toLocaleDateString();
  }

  return (<div className="flex flex-col p-4 md:p-8 lg:p-12">
    <h1 className="pt-16">Blog</h1>

      <div className="flex flex-col justify-center mt-8">
        {!blogPosts.length && 'No posts yet'}
        {blogPosts.map((post: BlogPost, index: number) => <div key={post.id}>
          {index > 0 && (
            <hr className="my-4 mx-16" />
          )}
          <Link
            key={post.id}
            to={`${post.slug}`}
            className="flex flex-row justify-between"
          >
            <span>
              {post.title}
            </span>
            <span>{post.excerpt}</span>
            <span>{post.publishedAt ? formatDate(post.publishedAt) : ''}</span>
          </Link>
        </div>
        )}
      </div>
  </div>);
}