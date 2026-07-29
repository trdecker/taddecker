export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  ABOUT_SITE: '/about/site',
  BLOG: '/blog',
  BLOG_POST: '/blog/:id',
  CONTACT: '/contact',
  RESUME: '/resume',
} as const;

export type RoutePath = typeof ROUTES[keyof typeof ROUTES];