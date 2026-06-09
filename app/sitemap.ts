import { MetadataRoute } from 'next';
import { SERVICES_DATA } from '../constants/services';
import { ALL_BLOG_POSTS } from './blog/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.APP_URL || 'https://www.simbafm.at';
  
  const routes = [
    '',
    '/leistungen',
    '/ueber-uns',
    '/kontakt',
    '/karriere',
    '/prozess',
    '/blog',
    '/agb',
    '/impressum',
    '/datenschutz',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const serviceRoutes = SERVICES_DATA.map((service) => ({
    url: `${baseUrl}${service.path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogPostRoutes = ALL_BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...serviceRoutes, ...blogPostRoutes];
}
