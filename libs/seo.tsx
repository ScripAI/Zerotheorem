import type { Metadata } from "next";
import config from "@/config";

// Enhanced SEO tags with comprehensive meta data for better search engine optimization
// It prefills data with default title/description/OG, etc.. and you can customize it for each page.
// It's already added in the root layout.js so you don't have to add it to every page.
// But I recommend setting the canonical URL for each page (export const metadata = getSEOTags({canonicalUrlRelative: "/"});)
// See https://shipfa.st/docs/features/seo
export const getSEOTags = ({
  title,
  description,
  keywords,
  openGraph,
  canonicalUrlRelative,
  extraTags,
  structuredData,
  noindex = false,
  nofollow = false,
}: {
  title?: string;
  description?: string;
  keywords?: string[];
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
  };
  canonicalUrlRelative?: string;
  extraTags?: Record<string, any>;
  structuredData?: any;
  noindex?: boolean;
  nofollow?: boolean;
} = {}): Metadata => {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : `https://${config.domainName}`;

  return {
    // Primary title - up to 60 characters for optimal display
    title: title || config.appName,
    // Meta description - up to 160 characters for optimal display
    description: description || config.appDescription,
    // Keywords array for better targeting
    keywords: keywords || [config.appName],
    applicationName: config.appName,
    authors: [{ name: "ZeroTheorem Investment Team" }],
    creator: "ZeroTheorem",
    publisher: "ZeroTheorem",
    category: "Investment Management",

    // Set a base URL prefix for other fields that require a fully qualified URL
    metadataBase: new URL(baseUrl),

    // Enhanced Open Graph tags for social media sharing
    openGraph: {
      title: openGraph?.title || title || config.appName,
      description:
        openGraph?.description || description || config.appDescription,
      url: openGraph?.url || `${baseUrl}${canonicalUrlRelative || "/"}`,
      siteName: config.appName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${baseUrl}/opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: String(title || config.appName),
        },
      ],
    },

    // Enhanced Twitter Card tags
    twitter: {
      card: "summary_large_image",
      title: openGraph?.title || title || config.appName,
      description:
        openGraph?.description || description || config.appDescription,
      creator: "@zerotheorem",
      site: "@zerotheorem",
      images: [`${baseUrl}/twitter-image.png`],
    },

    // Canonical URL for duplicate content prevention
    ...(canonicalUrlRelative && {
      alternates: {
        canonical: canonicalUrlRelative,
        languages: {
          "en-US": `${baseUrl}${canonicalUrlRelative}`,
        },
      },
    }),

    // Enhanced robots meta tags
    robots: {
      index: !noindex,
      follow: !nofollow,
      nocache: false,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },

    // Search engine verification
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      yandex: process.env.YANDEX_VERIFICATION,
      yahoo: process.env.YAHOO_VERIFICATION,
      other: {
        "msvalidate.01": process.env.BING_VERIFICATION,
      },
    },

    // Additional meta tags for better SEO
    other: {
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "black-translucent",
      "format-detection": "telephone=no",
      "mobile-web-app-capable": "yes",
      "theme-color": config.colors.main,
      "msapplication-TileColor": config.colors.main,
      "msapplication-config": "/browserconfig.xml",
    },

    // If you want to add extra tags, you can pass them here
    ...extraTags,
  };
};

// Enhanced Structured Data for Rich Results on Google
// Learn more: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
// Find your type here (Organization, FinancialService...): https://developers.google.com/search/docs/appearance/structured-data/search-gallery
// Use this tool to check that the data is well structured: https://search.google.com/test/rich-results
// You don't have to use this component, but it increases your chances of having a rich snippet on Google.
// I recommend adding the one below to your /page.js for investment firms: It tells Google that ZeroTheorem is a FinancialService organization.
// Fill in the fields with your own data.
// See https://shipfa.st/docs/features/seo
export const renderSchemaTags = (
  pageType:
    | "home"
    | "about"
    | "contact"
    | "performance"
    | "privacy"
    | "terms"
    | "gdpr" = "home"
) => {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : `https://${config.domainName}`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: config.appName,
    description: config.appDescription,
    image: `${baseUrl}/logo.png`,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "81-83 Campbell Street",
      addressLocality: "Surry Hills",
      addressRegion: "NSW",
      postalCode: "2010",
      addressCountry: "AU",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+61 402 692545",
      contactType: "customer service",
      email: "kh@zerotheorem.com",
    },
    sameAs: ["https://www.linkedin.com/company/zerotheorem"],
    foundingDate: "2023",
    industry: "Investment Management",
    serviceType: "Financial Services",
    areaServed: "Global",
    knowsAbout: [
      "Bitcoin Investment",
      "Cryptocurrency Trading",
      "Risk Management",
      "Quantitative Finance",
      "Blockchain Technology",
      "Alternative Investments",
    ],
  };

  const financialServiceSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: config.appName,
    description: config.appDescription,
    url: baseUrl,
    serviceType: "Investment Management",
    provider: {
      "@type": "Organization",
      name: config.appName,
    },
    areaServed: "Global",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Investment Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bitcoin Tail Risk Warehousing",
            description:
              "Specialized investment strategies for Bitcoin tail risk management",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: config.appName,
    description: config.appDescription,
    url: baseUrl,
    publisher: {
      "@type": "Organization",
      name: config.appName,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      ...(pageType !== "home"
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: pageType.charAt(0).toUpperCase() + pageType.slice(1),
              item: `${baseUrl}/${pageType}`,
            },
          ]
        : []),
    ],
  };

  // Combine schemas based on page type
  const schemas: any[] = [organizationSchema, websiteSchema, breadcrumbSchema];

  if (pageType === "home") {
    schemas.push(financialServiceSchema);
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemas.length === 1 ? schemas[0] : schemas),
      }}
    ></script>
  );
};

// Additional structured data for specific pages
export const renderPageSchema = (pageData: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  image?: string;
}) => {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : `https://${config.domainName}`;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: pageData.title,
          description: pageData.description,
          url: pageData.url,
          ...(pageData.datePublished && {
            datePublished: pageData.datePublished,
          }),
          ...(pageData.dateModified && { dateModified: pageData.dateModified }),
          ...(pageData.author && {
            author: { "@type": "Person", name: pageData.author },
          }),
          ...(pageData.image && { image: pageData.image }),
          publisher: {
            "@type": "Organization",
            name: config.appName,
            logo: `${baseUrl}/logo.png`,
          },
        }),
      }}
    ></script>
  );
};
