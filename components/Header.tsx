"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ButtonSignin from "./ButtonSignin";
import logo from "@/app/icon.png";
import config from "@/config";
import { Sparkle } from "lucide-react";
import ButtonAccount from "./ButtonAccount";
import Stats from "./Stats";

const megaMenuSections = [
  {
    title: "Social Media",
    icon: "📱",
    items: [
  
      { href: "/ig-reel-script", label: "IG Script Writer" },
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
    icon: "#️⃣",
    items: [
      { href: "/hashtag-generator", label: "AI Hashtag Generator" },
      { href: "/twitter-hashtag", label: "Twitter Hashtag" },
      { href: "/linkedin-hashtag", label: "LinkedIn Hashtag" },
      { href: "/tiktok-hashtag", label: "TikTok Hashtag" },
      { href: "/facebook-hashtag", label: "Facebook Hashtag" },
      { href: "/facebook-hashtag-generator", label: "Facebook Hashtag Generator" },
      { href: "/instagram-hashtag", label: "Instagram Hashtag" },
      { href: "/youtube-hashtag", label: "YouTube Hashtag" },
    ],
  },
  {
    title: "Video & YouTube",
    icon: "🎬",
    items: [
      { href: "/youtube-hook", label: "YouTube Hook" },
      { href: "/youtube-intro", label: "YouTube Intro" },
      { href: "/yt-shorts-script", label: "YT Shorts Script" },
      { href: "/tiktok-script", label: "TikTok Script Writer" },
      { href: "/youtube-video-idea", label: "YouTube Video Ideas" },
      { href: "/youtube-video-outline", label: "YouTube Video Outline" },
      { href: "/youtube-seo-title", label: "YouTube SEO Title" },
      { href: "/youtube-seo-description", label: "YouTube SEO Description" },
      { href: "/youtube-tag", label: "YouTube Tag" },
    ],
  },
  {
    title: "Content & Writing",
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
    ],
  },
  {
    title: "Blog & SEO",
    icon: "📝",
    items: [
      { href: "/blog-post-idea", label: "Blog Post Ideas" },
      { href: "/blog-post-title", label: "Blog Post Title" },
      { href: "/blog-post-outline", label: "Blog Post Outline" },
      { href: "/blog-post-hook", label: "Blog Post Hook" },
      { href: "/seo-keyword-generator", label: "SEO Keyword Generator" },
      { href: "/seo-title-generator", label: "SEO Title Generator" },
      { href: "/seo-description-generator", label: "SEO Description Generator" },
    ],
  },
  {
    title: "Email & Communication",
    icon: "📧",
    items: [
      { href: "/email-subject", label: "Email Subject Generator" },
      { href: "/cold-email", label: "Cold Email Writer" },
      { href: "/rewrite-email", label: "Email Rewriter" },
      { href: "/email-rewriter", label: "Professional Email Rewriter" },
      { href: "/linkedin-cold-reachout", label: "LinkedIn Cold Reachout" },
      { href: "/customer-service-response", label: "Customer Service Response" },
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
    title: "Career & Professional",
    icon: "👔",
    items: [
      { href: "/about-me-generator", label: "About Me Generator" },
      { href: "/resume-hook-generator", label: "Resume Hook" },
      { href: "/resume-intro-generator", label: "Resume Intro" },
      { href: "/job-skills-generator", label: "Job Skills" },
      { href: "/job-description-generator", label: "Job Description" },
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
      { href: "/song-writer", label: "Song Writer" },
      { href: "/poem-writer", label: "Poem Writer" },
      { href: "/definition", label: "Definition" },
      { href: "/hashtag", label: "Hashtag Generator" },
      { href: "/acronym-generator", label: "Acronym Generator" },
      { href: "/ai-language-translator", label: "Language Translator" },
      { href: "/ai-tools", label: "Name Generators" },
      { href: "/ai-tools", label: "All Tools" },
    ],
  },
];


// A header with a logo on the left, dropdown menus in the center, and a CTA on the right.
// The header is responsive, and on mobile, the links are hidden behind a burger button.
const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  
  // Mobile menu section toggles - all sections closed by default
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());
  
  // Stats state management
  const [numberOfWords, setNumberOfWords] = useState(0);
  const [moneySaved, setMoneySaved] = useState(30);

  // setIsOpen(false) when the route changes (i.e: when the user clicks on a link on mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  // Load stats from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localWords = localStorage.getItem('numberOfWords');
      const initialNumberOfWords = Number(localWords) || 0;
      setNumberOfWords(initialNumberOfWords);
      
      const localMoney = localStorage.getItem('moneySaved') || '30';
      const initialMoneySaved = Number(localMoney);
      setMoneySaved(initialMoneySaved);
    }
  }, []);

  // Listen for stats updates from other components
  useEffect(() => {
    const handleStatsUpdate = (event: CustomEvent) => {
      const { numberOfWords: newWords, moneySaved: newMoney } = event.detail;
      setNumberOfWords(newWords);
      setMoneySaved(newMoney);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('statsUpdated', handleStatsUpdate as EventListener);
      
      return () => {
        window.removeEventListener('statsUpdated', handleStatsUpdate as EventListener);
      };
    }
  }, []);

  const handleMegaMenuToggle = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
  };

  const handleMegaMenuClose = () => {
    setIsMegaMenuOpen(false);
  };

  const toggleMobileSection = (sectionTitle: string) => {
    setOpenSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionTitle)) {
        newSet.delete(sectionTitle);
      } else {
        newSet.add(sectionTitle);
      }
      return newSet;
    });
  };

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const megaMenuContainer = document.querySelector('[data-mega-menu-container]');
      
      if (isMegaMenuOpen && megaMenuContainer && !megaMenuContainer.contains(target)) {
        setIsMegaMenuOpen(false);
      }
    };

    if (isMegaMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMegaMenuOpen]);

  return (
    <header className="bg-base-200">
      <nav
        className="flex items-center max-w-5xl justify-between py-2 px-4  mx-auto"
        aria-label="Global"
      >
        {/* Your logo/name on large screens */}

        <Link
          href={"/"}
          className={`flex items-center gap-2 px-1.5 py-2  text-gray-900 `}
        >
          <Sparkle
            strokeWidth={1}
            color="#F43F5E"
            fill="#F43F5E"
            className={"w-6  h-6 text-rose-500"}
          />
          <span className="font-extrabold text-2xl">{config.appName}</span>
        </Link>

        {/* Burger button to open menu on mobile */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center p-2.5"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-base-content"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* All Tools Mega Menu on large screens */}
        <div className="hidden lg:flex lg:justify-center lg:items-center">
          <div className="relative" data-mega-menu-container>
            <button
              className="flex items-center gap-1 px-3 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:text-gray-900"
              onClick={handleMegaMenuToggle}
            >
              All Tools
              <svg
                className={`w-4 h-4 transition-transform ${
                  isMegaMenuOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Mega Menu */}
            <div
              className={`absolute left-1/2  transform -translate-x-1/2 mt-2 w-screen max-w-6xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 z-50 ${
                isMegaMenuOpen ? "block" : "hidden"
              }`}
            >
              <div className="p-6">
                <div className="grid grid-cols-5 gap-5">
                  {megaMenuSections.map((section) => (
                    <div key={section.title} className="space-y-3">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-semibold text-gray-900">{section.title}</h3>
                      </div>
                      <div className="space-y-2">
                        {section.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block text-sm text-gray-600 hover:text-blue-500 hover:underline hover:bg-gray-50 px-2 py-1"
                            onClick={handleMegaMenuClose}
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
          </div>


          <div className="flex items-center gap-2 ml-4">
          <Stats numberOfWords={numberOfWords} dollers={moneySaved} />
            {/* Account Button */}
            <ButtonAccount />
          </div>

        </div>


      </nav>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`relative z-50 ${isOpen ? "" : "hidden"}`}>
        <div
          className={`fixed inset-y-0 right-0 z-10 bg-white w-full px-4 py-2 overflow-y-auto bg-base-200 sm:max-w-sm  transform origin-right transition ease-in-out duration-300`}
        >
          {/* Your logo/name on small screens */}
          <div className="flex items-center justify-between">
            <Link
              href={"/"}
              className={`flex flex-1 items-center gap-2 px-1.5 py-2  text-gray-900 `}
            >
              <Sparkle
                strokeWidth={1}
                color="#F43F5E"
                fill="#F43F5E"
                className={"w-6  h-6"}
              />
              <span className="font-extrabold text-2xl">{config.appName}</span>
            </Link>

            <button
              type="button"
              className="-m-2.5 p-2.5"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile tools sections */}
          <div className="mt-2">
            <div className="flex flex-col gap-y-3 ml-2 items-start">
              {megaMenuSections.map((section) => {
                const isOpen = openSections.has(section.title);
                return (
                  <div key={section.title} className="w-full">
                    <button
                      className="flex items-center justify-between w-full py-2 px-3 bg-gray-50 hover:bg-gray-100 transition-colors"
                      onClick={() => toggleMobileSection(section.title)}
                    >
                      <h3 className="text-sm font-semibold text-gray-900">{section.title}</h3>
                      <svg
                        className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="space-y-1 ml-1">
                        {section.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              
              <div className="flex flex-col p-2 gap-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100">
                <ButtonAccount />           
                <Stats numberOfWords={numberOfWords} dollers={moneySaved} />

              </div>
            </div>



            
            {/* Your CTA on small screens */}
           

          
          </div>
        </div>
      </div>
      
   
    </header>
  );
};

export default Header;
