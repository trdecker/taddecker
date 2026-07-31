import type { BlogPost } from '../../shared/types';
import { client } from './client';

// ##### GET ##### //

export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  const { data, errors } = await client.models.BlogPost.listBlogPostByStatusAndPublishedAt(
    {
      status: 'published'
    },
    {
      sortDirection: 'DESC',
      authMode: 'apiKey'
    }
  );

  if (errors) {
    throw new Error("Error loading blog posts");
  }

  return data;
}

export async function getBlogPostFromSlug(slug: string): Promise<BlogPost | undefined> {
  const { data, errors } = await client.models.BlogPost.listBlogPostBySlug({
    slug,
  }, {
    authMode: 'apiKey',
  });

  if (errors) {
    throw new Error("Error loading blog post");
  }

  if (data?.length > 0) return data[0];
}