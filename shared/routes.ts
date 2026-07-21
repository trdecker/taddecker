export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  ABOUT_SITE: '/about/site',
  BLOG: '/blog',
  CONTACT: '/contact',
} as const;

export type RoutePath = typeof ROUTES[keyof typeof ROUTES];