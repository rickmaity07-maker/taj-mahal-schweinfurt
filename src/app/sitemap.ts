import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';

const routes = ['', '/menu', '/order', '/gallery', '/events', '/loyalty', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${siteUrl}${r}`,
    changeFrequency: r === '/menu' ? 'weekly' : 'monthly',
    priority: r === '' ? 1 : 0.7,
  }));
}
