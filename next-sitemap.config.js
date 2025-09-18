module.exports = {
  // REQUIRED: add your own domain name here (e.g. https://zerotheorem.com),
  siteUrl: process.env.SITE_URL || "https://zerotheorem.com",
  generateRobotsTxt: true,
  // use this to exclude routes from the sitemap (i.e. a user dashboard). By default, NextJS app router metadata files are excluded (https://nextjs.org/docs/app/api-reference/file-conventions/metadata)
  exclude: [
    "/twitter-image.*", 
    "/opengraph-image.*", 
    "/icon.*",
    "/apple-icon.*",
    "/favicon.*",
    "/api/*",
    "/dashboard/*",
    "/signin/*",
    "/_next/*",
    "/admin/*",
    "/private/*"
  ],
  // Additional sitemap configuration for better SEO
  generateIndexSitemap: false,
  // Custom sitemap configuration
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/about'),
    await config.transform(config, '/contact'),
    await config.transform(config, '/performance'),
    await config.transform(config, '/privacy'),
    await config.transform(config, '/tc'),
    await config.transform(config, '/gdpr'),
  ],
  // Enhanced robots.txt configuration
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/dashboard/',
          '/signin/',
          '/_next/',
          '/admin/',
          '/private/',
          '/twitter-image.*',
          '/opengraph-image.*',
          '/icon.*',
          '/apple-icon.*',
          '/favicon.*'
        ],
      },
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        disallow: '/',
      },
      {
        userAgent: 'Claude-Web',
        disallow: '/',
      },
    ],
    additionalSitemaps: [
      'https://zerotheorem.com/sitemap.xml',
    ],
    host: 'https://zerotheorem.com',
  },
  // Custom sitemap configuration
  changefreq: 'daily',
  priority: 0.7,
  lastmod: new Date().toISOString(),
  // Custom transform function for better SEO
  transform: async (config, path) => {
    const customConfig = {
      loc: path,
      changefreq: 'daily',
      priority: path === '/' ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
    };

    // Set specific priorities for important pages
    if (path === '/') {
      customConfig.priority = 1.0;
    } else if (path === '/about') {
      customConfig.priority = 0.9;
    } else if (path === '/contact') {
      customConfig.priority = 0.8;
    } else if (path === '/performance') {
      customConfig.priority = 0.8;
    } else {
      customConfig.priority = 0.7;
    }

    return customConfig;
  },
};