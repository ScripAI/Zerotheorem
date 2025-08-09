"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ButtonSignin from "./ButtonSignin";
import logo from "@/app/icon.png";
import config from "@/config";
import { Sparkles } from "lucide-react";
import ButtonAccount from "./ButtonAccount";

const dropdownMenus = [
  {
    label: "Social Media",
    items: [
      { href: "/social-media-post", label: "Social Media Post" },
      { href: "/social-post-idea", label: "Social Media Post Ideas" },
      { href: "/hashtag-generator", label: "AI Hashtag Generator" },
      { href: "/app", label: "Short Video Script" },
    ],
  },
  {
    label: "Copywriting",
    items: [
      { href: "/paragraph-writer", label: "Paragraph Writer" },
      { href: "/sentence-expander", label: "Sentence Expander" },
      { href: "/content-rewriter", label: "Content Rewriter" },
      { href: "/sales-copy", label: "Sales Copy Generator" },
      { href: "/content-idea", label: "Content Ideas" },
    ],
  },
  {
    label: "Blog & SEO",
    items: [
      { href: "/blog-post-idea", label: "Blog Post Ideas" },
      { href: "/blog-post-title", label: "Blog Post Title" },
      { href: "/blog-post-outline", label: "Blog Post Outline" },
      { href: "/seo-keyword-generator", label: "SEO Keyword Generator" },
      { href: "/seo-title-generator", label: "SEO Title Generator" },
    ],
  },
  {
    label: "Email & Writing",
    items: [
      { href: "/email-subject", label: "Email Subject" },
      { href: "/cold-email", label: "Cold Email" },
      { href: "/rewrite-email", label: "Email Rewriter" },
      { href: "/email-rewriter", label: "Professional Email Rewriter" },
    ],
  },
  {
    label: "More Tools",
    items: [
      { href: "/ai-tools", label: "All Tools" },
      { href: "/hashtag", label: "Hashtag Generator" },
      { href: "/definition", label: "Definition" },
      { href: "/song-writer", label: "Song Writer" },
      { href: "/poem-writer", label: "Poem Writer" },
    ],
  },
];


// A header with a logo on the left, dropdown menus in the center, and a CTA on the right.
// The header is responsive, and on mobile, the links are hidden behind a burger button.
const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // setIsOpen(false) when the route changes (i.e: when the user clicks on a link on mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  const handleDropdownToggle = (index: any) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleDropdownClose = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="bg-base-200">
      <nav
        className="flex items-center max-w-5xl justify-between py-2 px-4  mx-auto"
        aria-label="Global"
      >
        {/* Your logo/name on large screens */}

        <Link
          href={"/"}
          className={`flex items-center gap-2 px-1.5 py-2 rounded-lg  text-gray-900 `}
        >
          <Sparkles
            strokeWidth={1}
            color="#F43F5E"
            fill="#F43F5E"
            className={"w-6  h-6"}
          />
          <span className="font-extrabold text-2xl">{config.appName}</span>
        </Link>

        {/* Burger button to open menu on mobile */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
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

        {/* Dropdown menus on large screens */}
        <div className="hidden lg:flex lg:justify-center lg:items-center">
          {dropdownMenus.map((menu, index) => (
            <div key={menu.label} className="relative group">
              <button
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => handleDropdownToggle(index)}
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {menu.label}
                <svg
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === index ? "rotate-180" : ""
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

              {/* Dropdown menu */}
              <div
                className={`absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50 ${
                  activeDropdown === index ? "block" : "hidden"
                }`}
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="py-1">
                  {menu.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      onClick={handleDropdownClose}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA on large screens */}
        <div className="hidden lg:flex lg:justify-end">
          <ButtonAccount />
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`relative z-50 ${isOpen ? "" : "hidden"}`}>
        <div
          className={`fixed inset-y-0 right-0 z-10 bg-white w-full px-4 py-2 overflow-y-auto bg-base-200 sm:max-w-sm sm:ring-1 sm:ring-neutral/10 transform origin-right transition ease-in-out duration-300`}
        >
          {/* Your logo/name on small screens */}
          <div className="flex items-center justify-between">
            <Link
              href={"/"}
              className={`flex flex-1 items-center gap-2 px-1.5 py-2 rounded-lg  text-gray-900 `}
            >
              <Sparkles
                strokeWidth={1}
                color="#F43F5E"
                fill="#F43F5E"
                className={"w-6  h-6"}
              />
              <span className="font-extrabold text-2xl">{config.appName}</span>
            </Link>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
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

          {/* Mobile dropdown menus */}
          <div className="mt-2">
            <div className="flex flex-col gap-y-4 items-start">
              {dropdownMenus.map((menu, index) => (
                <div key={menu.label} className="w-full">
                  <button
                    className="flex items-center justify-between w-full px-4 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                    onClick={() => handleDropdownToggle(index)}
                  >
                    {menu.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === index ? "rotate-180" : ""
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

                  {/* Mobile dropdown items */}
                  <div
                    className={`${
                      activeDropdown === index ? "block" : "hidden"
                    } ml-4 mt-2`}
                  >
                    {menu.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-between w-full px-4 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
                <ButtonAccount />
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
