import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getBlogPostFromSlug } from "../api/BlogPost";
import type { BlogPost } from "../../shared/types";
import { formatDate } from "../utils";


export default function BlogPostPage() {
  const { slug } = useParams();
  const [blogPost, setBlogPost] = useState<BlogPost>();
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadBlogPost(slug: string) {
      try {
        const loadedBlogPost = await getBlogPostFromSlug(slug);
        if (loadedBlogPost) setBlogPost(loadedBlogPost);
        setLoading(false);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      loadBlogPost(slug);
    }
  }, [slug]);

  if (loading) return (<>Loading...</>);

  if (!blogPost) return (<>Blog post not found</>);

  


  return(<div className="m-12">
    <div className="flex justify-start mb-4">
      <button
        onClick={() => navigate('/blog')}
        style={{ backgroundColor: 'transparent' }}
      >
        Back
      </button> 
    </div>
    <p className="pb-4 text-lg">
      {blogPost.title ?? "NOT FOUND"}
    </p>
    {blogPost.publishedAt && (
      <p className="pb-4">
        {formatDate(blogPost.publishedAt)}
      </p>
    )}
    <p className="text-start">
      {blogPost.content}
    </p>
  </div>)
}