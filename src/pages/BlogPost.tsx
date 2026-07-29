import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getBlogPostFromSlug } from "../api/BlogPost";
import type { BlogPost } from "../../shared/types";


export default function BlogPostPage() {
  const { slug } = useParams();
  const [blogPost, setBlogPost] = useState<BlogPost>();
  const [loading, setLoading] = useState<boolean>(true);

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

  return(<>
    {blogPost.title ?? "NOT FOUND"}
    <p>{blogPost.content}</p>
  </>)
}