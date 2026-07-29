import type { Schema } from '../amplify/data/resource'
import { BLOG_POST_STATUSES } from './constants';

export type BlogPost = Schema['BlogPost']['type'];
export type BlogPostStatus = (typeof BLOG_POST_STATUSES)[number];