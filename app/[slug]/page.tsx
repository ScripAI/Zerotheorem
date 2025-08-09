import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageObj } from "../../components/PageObj";
import ToolPageClient from "./ToolPageClient";

// Type definitions for pageObj structure
interface SeoData {
  title: string;
  description: string;
  slug: string;
}

interface FieldConfig {
  name: string;
  maxLength: number;
  placeholder?: string;
  hint?: string;
  err?: string;
  showOptional?: boolean;
  rows?: number;
}

interface InitialState {
  title: string;
  description?: string;
  keywords?: string;
  language: string;
  tone?: string;
  time?: string;
  platform?: string;
}

interface PageData {
  url: string;
  name: string;
  toolName: string;
  initialState: InitialState;
  title?: FieldConfig;
  description?: FieldConfig;
  keywords?: FieldConfig;
  language?: string;
  tone?: string;
  time?: string;
  platform?: string;
  btnText: string;
  seoData: SeoData;
  related?: string[];
}

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all valid URLs
export async function generateStaticParams() {
  return pageObj.map((page: PageData) => ({
    slug: page.url,
  }));
}

// Generate metadata for each page
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = params;

  // Find the page data for this slug
  const pageData = pageObj.find((page: PageData) => page.url === slug);

  if (!pageData) {
    return {
      title: "Page Not Found",
      description: "The requested page could not be found.",
    };
  }

  // Use seoData if available, otherwise fall back to basic info
  const seoData = pageData.seoData;

  return {
    title: seoData.title || `${pageData.toolName || pageData.name} - Scrip AI`,
    description:
      seoData.description ||
      `Use our AI-powered ${pageData.name} tool to create amazing content.`,
    keywords: pageData.initialState?.keywords || "",
    openGraph: {
      title:
        seoData.title || `${pageData.toolName || pageData.name} - Scrip AI`,
      description:
        seoData.description ||
        `Use our AI-powered ${pageData.name} tool to create amazing content.`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:
        seoData.title || `${pageData.toolName || pageData.name} - Scrip AI`,
      description:
        seoData.description ||
        `Use our AI-powered ${pageData.name} tool to create amazing content.`,
    },
  };
}

const ToolPage = ({ params }: PageProps) => {
  const { slug } = params;

  // Find the page data for this slug
  const pageData = pageObj.find((page: PageData) => page.url === slug);

  // If page doesn't exist in pageObj, return 404
  if (!pageData) {
    notFound();
  }

  // Get related pages for the UI2 component
  const relatedArr =
    pageObj.filter((obj) => pageData.related?.includes(obj.url)) || [];

  return <ToolPageClient pageData={pageData} relatedArr={relatedArr} />;
};

export default ToolPage;
