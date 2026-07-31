import type { BlogPost } from '../../shared/types';
import { client } from './client';

// ##### GET ##### //

export async function getBlogPosts(): Promise<BlogPost[]> {
  const { data, errors } = await client.models.BlogPost.list({ authMode: 'apiKey'});

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