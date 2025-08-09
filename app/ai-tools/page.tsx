
'use client';

import Link from 'next/link';
import { Suspense } from 'react';
import Header from '@/components/Header';
import FooterBig from '@/components/FooterBig';
import HelloBar from '@/components/HelloBar';

const megaMenuSections = [
    // First Row
    {
      title: "Social Media",
      icon: "📱",
      items: [
        { href: "/social-media-post", label: "Social Media Post" },
        { href: "/social-post-idea", label: "Social Media Post Ideas" },
        { href: "/app", label: "Short Video Script" },
        { href: "/ig-reel-script", label: "IG Script Writer" },
        { href: "/tiktok-script", label: "TikTok Script Writer" },
        { href: "/yt-shorts-script", label: "YT Shorts Script" },
        { href: "/linkedin-post", label: "LinkedIn Post" },
        { href: "/linkedin-story-post", label: "LinkedIn Story Post" },
        { href: "/linkedin-post-hook", label: "LinkedIn Post Hook" },
        { href: "/facebook-post", label: "Facebook Post" },
        { href: "/twitter-tweet", label: "Twitter Tweet" },
        { href: "/twitter-thread", label: "Twitter Thread" },
        { href: "/twitter-bio", label: "Twitter Bio" },
        { href: "/instagram-caption", label: "Instagram Caption" },
        { href: "/tiktok-hook", label: "TikTok Hook" },
      ],
    },
    {
      title: "Hashtag Generators",
      icon: "🏷️",
      items: [
        { href: "/hashtag-generator", label: "AI Hashtag Generator" },
        { href: "/twitter-hashtag", label: "Twitter Hashtag" },
        { href: "/linkedin-hashtag", label: "LinkedIn Hashtag" },
        { href: "/tiktok-hashtag", label: "TikTok Hashtag" },
        { href: "/facebook-hashtag", label: "Facebook Hashtag" },
        { href: "/facebook-hashtag-generator", label: "Facebook Hashtag Generator" },
        { href: "/instagram-hashtag", label: "Instagram Hashtag" },
        { href: "/youtube-hashtag", label: "YouTube Hashtag" },
        { href: "/hashtag", label: "Hashtag Generator" },
      ],
    },
    {
      title: "Video & YouTube",
      icon: "🎬",
      items: [
        { href: "/youtube-hook", label: "YouTube Hook" },
        { href: "/youtube-intro", label: "YouTube Intro" },
        { href: "/youtube-video-idea", label: "YouTube Video Ideas" },
        { href: "/youtube-video-outline", label: "YouTube Video Outline" },
        { href: "/youtube-seo-title", label: "YouTube SEO Title" },
        { href: "/youtube-seo-description", label: "YouTube SEO Description" },
        { href: "/youtube-tag", label: "YouTube Tag" },
      ],
    },
    {
      title: "Blog  & Content Writing",
      icon: "✍️",
      items: [
        { href: "/paragraph-writer", label: "Paragraph Writer" },
        { href: "/sentence-expander", label: "Sentence Expander" },
        { href: "/sentence-rewriter", label: "Sentence Rewriter" },
        { href: "/content-rewriter", label: "Content Rewriter" },
        { href: "/content-idea", label: "Content Ideas" },
        { href: "/article-rewriter", label: "Article Rewriter" },
        { href: "/blog-rewriter", label: "Blog Paragraph Rewriter" },
        { href: "/blog-paragraph-writer", label: "Blog Paragraph Writer" },


        { href: "/blog-post-idea", label: "Blog Post Ideas" },
        { href: "/blog-post-title", label: "Blog Post Title" },
        { href: "/blog-post-outline", label: "Blog Post Outline" },
        { href: "/blog-post-hook", label: "Blog Post Hook" },
        { href: "/seo-keyword-generator", label: "SEO Keyword Generator" },
        { href: "/seo-title-generator", label: "SEO Title Generator" },
        { href: "/seo-description-generator", label: "SEO Description Generator" },
      ],
    },
    // Second Row
    {
      title: "Email & Professional",
      icon: "📧",
      items: [
        { href: "/email-subject", label: "Email Subject Generator" },
        { href: "/cold-email", label: "Cold Email Writer" },
        { href: "/rewrite-email", label: "Email Rewriter" },
        { href: "/email-rewriter", label: "Professional Email Rewriter" },
        { href: "/linkedin-cold-reachout", label: "LinkedIn Cold Reachout" },
        { href: "/customer-service-response", label: "Customer Service Response" },
        { href: "/about-me-generator", label: "About Me Generator" },
        { href: "/resume-hook-generator", label: "Resume Hook" },
        { href: "/resume-intro-generator", label: "Resume Intro" },
        { href: "/job-skills-generator", label: "Job Skills" },
        { href: "/job-description-generator", label: "Job Description" },
      ],
    },
    {
      title: "Business & Marketing",
      icon: "💼",
      items: [
        { href: "/sales-copy", label: "Sales Copy Generator" },
        { href: "/homepage-headline-generator", label: "Homepage Headline" },
        { href: "/call-to-action-generator", label: "Call-to-Action" },
        { href: "/about-us-generator", label: "About Us" },
        { href: "/product-features-generator", label: "Product Features" },
        { href: "/product-benefits-generator", label: "Product Benefits" },
        { href: "/product-review-generator", label: "Product Review" },
        { href: "/slogan-generator", label: "Slogan Generator" },
      ],
    },
    {
      title: "Advertising Tools",
      icon: "📢",
      items: [
        { href: "/facebook-ad-hook", label: "Facebook Ad Hook" },
        { href: "/facebook-ad-copy", label: "Facebook Ad Copy" },
        { href: "/instagram-ad-caption", label: "Instagram Ad Caption" },
        { href: "/instagram-ad-copy", label: "Instagram Ad Copy" },
        { href: "/linkedin-ad-title", label: "LinkedIn Ad Title" },
        { href: "/linkedin-ad-copy", label: "LinkedIn Ad Copy" },
        { href: "/linkedin-ad-description", label: "LinkedIn Ad Description" },
        { href: "/google-ad-title", label: "Google Ad Title" },
        { href: "/google-ad-copy", label: "Google Ad Copy" },
        { href: "/google-ad-description", label: "Google Ad Description" },
      ],
    },

    {
      title: "Educational Tools",
      icon: "🎓",
      items: [
        { href: "/question-generator", label: "Question Generator" },
        { href: "/question-answer-generator", label: "Question Answer" },
        { href: "/quiz-generator", label: "Quiz Generator" },
        { href: "/fact-generator", label: "Fact Generator" },
        { href: "/topic-example-generator", label: "Topic Examples" },
        { href: "/bullet-point-summary", label: "Bullet Point Summary" },
        { href: "/bullet-point-answer", label: "Bullet Point Answer" },
        { href: "/pros-and-cons", label: "Pros and Cons" },
        { href: "/webinar-title-generator", label: "Webinar Title" },
      ],
    },
    // Third Row
    {
      title: "Name Generators",
      icon: "🏷️",
      items: [
        { href: "/company-name-generator", label: "Company Name" },
        { href: "/buisness-name-generator", label: "Business Name" },
        { href: "/domain-name-generator", label: "Domain Name" },
        { href: "/blog-name-generator", label: "Blog Name" },
        { href: "/book-name-generator", label: "Book Name" },
        { href: "/play-name-generator", label: "Play Name" },
        { href: "/project-name-generator", label: "Project Name" },
        { href: "/username-generator", label: "Username" },
        { href: "/youtube-name-generator", label: "YouTube Name" },
        { href: "/youtube-channel-name-generator", label: "YouTube Channel Name" },
        { href: "/app-name-generator", label: "App Name" },
        { href: "/baby-boy-name-generator", label: "Baby Boy Name" },
        { href: "/baby-girl-name-generator", label: "Baby Girl Name" },
        { href: "/cafe-name-generator", label: "Cafe Name" },
        { href: "/random-name-generator", label: "Random Name" },
      ],
    },
    {
      title: "Utility Tools",
      icon: "🔧",
      items: [
        { href: "/song-writer", label: "Song Writer" },
        { href: "/poem-writer", label: "Poem Writer" },
        { href: "/definition", label: "Definition" },
        { href: "/acronym-generator", label: "Acronym Generator" },
        { href: "/ai-language-translator", label: "Language Translator" },
        { href: "/ai-tools", label: "All Tools" },
      ],
    },
  ];

const AIToolsPage = () => {
  return (
    <>
      <HelloBar />
      <Suspense>
        <Header />
      </Suspense>

      <main className="m-auto flex max-w-7xl flex-col">
        <div className="flex flex-col items-center justify-center gap-6 p-4 py-24">
          
          {/* Hero Section */}
          <div className="flex flex-col text-center text-base font-extrabold text-black xs:text-2xl sdm:text-4xl sm:gap-3 md:text-5xl mdx:text-6xl">
            <span>All AI Tools</span>
            <span className="text-rose-600">In One Place</span>
          </div>
          
          <p className="text-center text-xs sm:text-base text-gray-600">
            Choose from 150+ free AI tools to create amazing content instantly!
          </p>

          {/* First Row - Main Tools */}
          <div className="w-full max-w-7xl mt-12">
            <div className="grid grid-cols-5 gap-8">
              {megaMenuSections.slice(0, 5).map((section) => (
                <div key={section.title} className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                    {section.title}
                  </h3>
                  
                  <div className="space-y-3">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-sm text-gray-600 hover:text-blue-500 hover:underline"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Business Tools */}
          <div className="w-full max-w-7xl mt-16">
            <div className="grid grid-cols-5 gap-8">
              {megaMenuSections.slice(5, 10).map((section) => (
                <div key={section.title} className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                    {section.title}
                  </h3>
                  
                  <div className="space-y-3">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-sm text-gray-600 hover:text-blue-500 hover:underline"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Third Row - Additional Tools */}
          <div className="w-full max-w-7xl mt-16">
            <div className="grid grid-cols-5 gap-8">
              {megaMenuSections.slice(10).map((section) => (
                <div key={section.title} className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                    {section.title}
                  </h3>
                  
                  <div className="space-y-3">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-sm text-gray-600 hover:text-blue-500 hover:underline"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <FooterBig />
    </>
  );
};

export default AIToolsPage;