import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/'],
    },
    sitemap: 'https://www.nerqivastudio.in/sitemap.xml',
    host: 'https://www.nerqivastudio.in',
  };
}
