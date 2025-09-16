module.exports = {
  // REQUIRED: add your own domain name here (e.g. https://zerotheorem.com),
  siteUrl: process.env.SITE_URL || "https://zerotheorem.com",
  generateRobotsTxt: true,
  // use this to exclude routes from the sitemap (i.e. a user dashboard). By default, NextJS app router metadata files are excluded (https://nextjs.org/docs/app/api-reference/file-conventions/metadata)
  exclude: ["/twitter-image.*", "/opengraph-image.*", "/icon.*"],
  // Additional sitemap configuration for better SEO
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
    ],
    additionalSitemaps: [
      'https://zerotheorem.com/sitemap.xml',
    ],
  },
};