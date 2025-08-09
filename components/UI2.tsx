import React, { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { WindupChildren } from 'windups';
import HelloBar from './HelloBar';
import Footer from './Footer';
import Card from './Card';
import { pageObj } from './PageObj';
import Menu from '@/components/Menu';
import FooterBig from './FooterBig';
import Header from './Header';
import Link from 'next/link';

interface FieldConfig {
  name: string;
  maxLength: number;
  placeholder?: string;
  hint?: string;
  err?: string;
  showOptional?: boolean;
  rows?: number;
}

interface SeoData {
  title: string;
  description: string;
  slug: string;
}

interface TextConfig {
  toolName?: string;
  title?: FieldConfig;
  description?: FieldConfig;
  keywords?: FieldConfig;
  language?: string;
  tone?: string;
  time?: string;
  platform?: string;
  btnText: string;
  seoData?: SeoData;
}

interface PromptData {
  title: string;
  description: string;
  keywords: string;
  language?: string;
  tone?: string;
  time?: string;
  platform?: string;
}

interface UI2Props {
  prompt: PromptData;
  handleTitle: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleDescription: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleKeywords: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text: TextConfig;
  handleClearFields: () => void;
  handleLanguage: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleTone: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleTime: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleClearText: () => void;
  handleCopyText: () => void;
  handlePlatform: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleApi: () => void;
  isLoading: boolean;
  data: string[] | null;
  err: boolean;
  textCopy: boolean;
  show: boolean;
  mobile: boolean;
  hide: boolean;
  relatedArr: any[];
  numberOfWords: number;
  moneySaved: number;
}

const UI2: React.FC<UI2Props> = ({
  prompt,
  handleTitle,
  handleDescription,
  handleKeywords,
  text,
  handleClearFields,
  handleLanguage,
  handleTone,
  handleTime,
  handleClearText,
  handleCopyText,
  handlePlatform,
  handleApi,
  isLoading,
  data,
  err,
  textCopy,
  show,
  mobile,
  hide,
  relatedArr,
  numberOfWords,
  moneySaved,
}) => {
  const [relatedObj, setRelatedObj] = useState<any[]>([]);

  useEffect(() => {
    setRelatedObj(pageObj?.sort(() => Math.random() - 0.5).slice(0, 6));
  }, []);


    const ToolsLinks = [
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


  return (
    <div className="relative">
      {/* <SEOMeta
        title={text.seoData?.title}
        description={text.seoData?.description}
        slug={text.seoData?.slug}
      /> */}
         
      <Suspense>
         <HelloBar />
        <Header />
      </Suspense> 
  
      <main>
        <div className="m-auto flex max-w-5xl flex-col items-center text-sm">
          {/* <Nav /> */}
          <div className="flex w-full flex-col justify-around sm:flex-row">
            {hide && mobile && (
              <div className="mb-10 flex w-full flex-col gap-4 p-4">
                {text.toolName && (
                  <div className="flex flex-col gap-3">
                    <h1 className="w-full text-xl font-bold text-black ">
                      {text.toolName}
                    </h1>
                    <hr />
                  </div>
                )}
                {text?.title && text?.title?.name && (
                  <div className="flex flex-col gap-1">
                    <div className="text-xs">
                      {text.title.name}
                      {/* <span className="text-[8px]">{`(required)`}</span> */}
                    </div>
                    <textarea
                      placeholder={text.title.placeholder}

                      className="w-full border border-gray-300 p-1 text-xs placeholder:text-[9px] placeholder:text-gray-600"
                      rows={text?.title?.rows || 2}
                      maxLength={text.title.maxLength}
                      value={prompt.title}
                      onChange={handleTitle}
                    />
                    {text?.title?.hint && (
                      <div className="w-fit  p-1 text-xs text-gray-800">
                        <svg
                          className="mr-2 inline w-3"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                          />
                        </svg>

                        <span className="text-[9px]">{text.title.hint}</span>
                      </div>
                    )}
                    {err && (
                      <div className="text-xs text-rose-600">
                        {text.title.err}
                      </div>
                    )}
                  </div>
                )}

                {text?.description && text?.description?.name && (
                  <div className="flex flex-col gap-1 ">
                    <div className="text-xs">
                      {text.description.name}{' '}
                      {text.description.showOptional && (
                        <span className="text-[8px]">{`(optional)`}</span>
                      )}
                    </div>
                    <textarea

                      placeholder={text.description.placeholder}
                      className="w-full  border border-gray-300 p-1 text-xs placeholder:text-[9px] placeholder:text-gray-600"
                      rows={5}
                      maxLength={text.description.maxLength}
                      value={prompt.description}
                      onChange={handleDescription}
                    />
                  </div>
                )}

                {text.keywords && (
                  <div className="flex flex-col gap-1 ">
                    <div className="text-xs">
                      {text.keywords.name}{' '}
                      {text.keywords.showOptional && (
                        <span className="text-[8px]">{`(optional)`}</span>
                      )}
                    </div>
                    <input

                      className="w-full  border border-gray-300 p-2"
                      maxLength={text.keywords.maxLength}
                      value={prompt.keywords}
                      onChange={handleKeywords}
                    />
                  </div>
                )}

                {text.platform && (
                  <div className="flex flex-col gap-1 ">
                    <div className="text-xs">{text.platform}</div>
                    <select
                      onChange={handlePlatform}
                      className="w-full  border p-1 px-2 text-xs outline-none"
                    >
                      <option value="Facebook">
                        Facebook
                      </option>
                      <option value="Instagram">Instagram</option>
                      <option value="TikTok">TikTok </option>
                      <option value="Twitter">Twitter</option>
                      <option value="Linkedin">Linkedin</option>
                      <option value="Youtube">Youtube</option>
                      <option value="Youtube Short">Mastodon</option>
                      <option value="Vk">Vk</option>
                      <option value="Tumblr">Tumblr</option>
                      <option value="Instagram Reel">IG Reel</option>
                      <option value="Youtube Short">YT Shorts</option>
                    </select>
                  </div>
                )}

                <div className="flex w-full items-center gap-4">
                  {text.language && (
                    <div
                      className={
                        text?.language && text?.tone
                          ? 'flex flex-col gap-1'
                          : 'flex w-full flex-col gap-1'
                      }
                    >
                      <div className="text-xs">Language</div>
                      <select
                        onChange={handleLanguage}
                        className="w-full  border p-1 px-2 text-xs outline-none"
                      >
                        <option value="English">
                          English
                        </option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Arabic">Arabic</option>
                        <option value="Russian">Russian</option>
                        <option value="German">German</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Indonesian">Indonesian</option>
                        <option value="Vietnamese">Vietnamese</option>
                        <option value="Thai">Thai</option>
                        <option value="Korean">Korean</option>
                      </select>
                    </div>
                  )}

                  {text.tone && (
                    <div
                      className={
                        text?.language && text?.tone
                          ? 'flex flex-col gap-1'
                          : 'flex w-full flex-col gap-1'
                      }
                    >
                      <div className="text-xs">Tone</div>
                      <select
                        onChange={handleTone}
                        className="w-full  border p-1 px-2 text-xs outline-none"
                      >
                        <option value="Professional">
                          Professional
                        </option>
                        <option value="Informative">Informative</option>
                        <option value="Convincing">Convincing</option>
                        <option value="Enthusiastic">Enthusiastic</option>
                        <option value="Humorous">Humorous</option>
                        <option value="Formal">Formal</option>
                        <option value="Inspirational">Inspirational</option>
                        <option value="Passionate">Passionate</option>
                        <option value="Serious">Serious</option>
                        <option value="Thoughtful">Thoughtful</option>
                        <option value="Worried">Worried</option>
                      </select>
                    </div>
                  )}
                </div>

                {text.time && (
                  <div className="flex items-center  gap-1">
                    <div className="text-xs">Time :</div>
                    <select
                      onChange={handleTime}
                      className=" border-none p-1 px-2 text-xs outline-none"
                    >
                      <option value="30-to-60 seconds">
                        30-to-60 seconds
                      </option>
                      <option value="30 seconds">30 seconds</option>
                      <option value="60 seconds">60 seconds</option>
                    </select>
                  </div>
                )}

                {
                  <button
                    disabled={isLoading}
                    onClick={handleApi}
                    className="mx-auto w-full rounded border bg-rose-600 p-2 text-white shadow-sm outline-none"
                  >
                    {isLoading ? 'Loading...' : text.btnText}
                  </button>
                }
                {data?.length && data && (
                  <button
                    onClick={handleClearFields}
                    className="mx-auto w-full rounded border p-2 outline-none"
                  >
                    Clear All Fields
                  </button>
                )}
              </div>
            )}
            {show && mobile && (
              <div className="relative mb-10 flex w-full flex-col gap-2 p-4">
                <div
                  id="copy"
                  contentEditable={true}
                  className="h-[75vh] w-full overflow-y-scroll  border bg-white p-4 placeholder:text-[8px] placeholder:text-gray-600 focus:outline-none"
                >
                  <WindupChildren>
                    {data?.length ? (
                      data?.map((el: string, index: number) => (
                        <p key={index} id={index.toString()}>
                          {el} <br></br>
                        </p>
                      ))
                    ) : isLoading ? (
                      <p className="flex items-center">
                        <svg
                          className="mr-2 inline w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                          />
                        </svg>
                        AI is Working, please wait this can take upto 40 sec...
                      </p>
                    ) : (
                      <p className="flex items-center">
                        <svg
                          className="mr-2 inline w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                          />
                        </svg>
                        AI will write content here!
                      </p>
                    )}
                  </WindupChildren>
                </div>
                <div className="flex justify-center gap-2 p-2 text-xs sm:justify-end">
                  <button
                    className="mb-1 cursor-pointer border rounded bg-gray-700 px-4 py-2 text-white"
                    onClick={handleCopyText}
                  >
                    {textCopy ? 'Text copied' : 'Copy to Clipboard'}
                  </button>
                  <button
                    className="mb-1 cursor-pointer border rounded bg-rose-600 p-2 text-white"
                    onClick={handleClearText}
                  >
                    <svg
                      className="w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}
            {!mobile && (
              <div className="flex w-full flex-col gap-4 p-4 sm:w-2/5 ">
                {text.toolName && (
                  <div className="flex flex-col gap-3">
                    <h1 className="w-full text-xl font-bold text-black ">
                      {text.toolName}
                    </h1>
                    <hr />
                  </div>
                )}
                {text?.title && text?.title?.name && (
                  <div className="flex flex-col gap-1">
                    <div className="text-xs">
                      {text.title.name}
                      {/* <span className="text-[8px]">{`(required)`}</span> */}
                    </div>
                    <textarea
                      placeholder={text.title.placeholder}

                      className="w-full  border border-gray-300 p-1 text-xs placeholder:text-[9px] placeholder:text-gray-600"
                      rows={text?.title?.rows || 2}
                      maxLength={text.title.maxLength}
                      value={prompt.title}
                      onChange={handleTitle}
                    />
                    {text?.title?.hint && (
                      <div className="w-fit  p-1 text-xs text-gray-800">
                        <svg
                          className="mr-2 inline w-3"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                          />
                        </svg>

                        <span className="text-[9px]">{text.title.hint}</span>
                      </div>
                    )}
                    {err && (
                      <div className="text-xs text-rose-600">
                        {text.title.err}
                      </div>
                    )}
                  </div>
                )}

                {text?.description && text?.description?.name && (
                  <div className="flex flex-col gap-1 ">
                    <div className="text-xs">
                      {text.description.name}{' '}
                      {text.description.showOptional && (
                        <span className="text-[8px]">{`(optional)`}</span>
                      )}
                    </div>
                    <textarea

                      placeholder={text.description.placeholder}
                      className="w-full  border border-gray-300 p-1 text-xs placeholder:text-[9px] placeholder:text-gray-600"
                      rows={5}
                      maxLength={text.description.maxLength}
                      value={prompt.description}
                      onChange={handleDescription}
                    />
                  </div>
                )}

                {text.keywords && (
                  <div className="flex flex-col gap-1 ">
                    <div className="text-xs">
                      {text.keywords.name}{' '}
                      {text.keywords.showOptional && (
                        <span className="text-[8px]">{`(optional)`}</span>
                      )}
                    </div>
                    <input

                      className="w-full  border border-gray-300 p-2"
                      maxLength={text.keywords.maxLength}
                      value={prompt.keywords}
                      onChange={handleKeywords}
                    />
                  </div>
                )}

                {text.platform && (
                  <div className="flex flex-col gap-1 ">
                    <div className="text-xs">{text.platform}</div>
                    <select
                      onChange={handlePlatform}
                      className="w-full  border p-1 px-2 text-xs outline-none"
                    >
                      <option value="Facebook">
                        Facebook
                      </option>
                      <option value="Instagram">Instagram</option>
                      <option value="TikTok">TikTok </option>
                      <option value="Twitter">Twitter</option>
                      <option value="Linkedin">Linkedin</option>
                      <option value="Youtube">Youtube</option>
                      <option value="Youtube Short">Mastodon</option>
                      <option value="Vk">Vk</option>
                      <option value="Tumblr">Tumblr</option>
                      <option value="Instagram Reel">IG Reel</option>
                      <option value="Youtube Short">YT Shorts</option>
                    </select>
                  </div>
                )}

                <div className="flex w-full items-center gap-4">
                  {text.language && (
                    <div
                      className={
                        text?.language && text?.tone
                          ? 'flex flex-col gap-1'
                          : 'flex w-full flex-col gap-1'
                      }
                    >
                      <div className="text-xs">Language</div>
                      <select
                        onChange={handleLanguage}
                        className="w-full  border p-1 px-2 text-xs outline-none"
                      >
                        <option value="English">
                          English
                        </option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Arabic">Arabic</option>
                        <option value="Russian">Russian</option>
                        <option value="German">German</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Indonesian">Indonesian</option>
                        <option value="Vietnamese">Vietnamese</option>
                        <option value="Thai">Thai</option>
                        <option value="Korean">Korean</option>
                      </select>
                    </div>
                  )}

                  {text.tone && (
                    <div
                      className={
                        text?.language && text?.tone
                          ? 'flex flex-col gap-1'
                          : 'flex w-full flex-col gap-1'
                      }
                    >
                      <div className="text-xs">Tone</div>
                      <select
                        onChange={handleTone}
                        className="w-full  border p-1 px-2 text-xs outline-none"
                      >
                        <option value="Professional">
                          Professional
                        </option>
                        <option value="Informative">Informative</option>
                        <option value="Convincing">Convincing</option>
                        <option value="Enthusiastic">Enthusiastic</option>
                        <option value="Humorous">Humorous</option>
                        <option value="Formal">Formal</option>
                        <option value="Inspirational">Inspirational</option>
                        <option value="Passionate">Passionate</option>
                        <option value="Serious">Serious</option>
                        <option value="Thoughtful">Thoughtful</option>
                        <option value="Worried">Worried</option>
                      </select>
                    </div>
                  )}
                </div>

                {text.time && (
                  <div className="flex items-center  gap-1">
                    <div className="text-xs">Time :</div>
                    <select
                      onChange={handleTime}
                      className=" border-none p-1 px-2 text-xs outline-none"
                    >
                      <option value="30-to-60 seconds">
                        30-to-60 seconds
                      </option>
                      <option value="30 seconds">30 seconds</option>
                      <option value="60 seconds">60 seconds</option>
                    </select>
                  </div>
                )}

                {
                  <button
                    disabled={isLoading}
                    onClick={handleApi}
                    className="mx-auto w-full  border bg-rose-600 p-2 text-white shadow-sm outline-none"
                  >
                    {isLoading ? 'Loading...' : text.btnText}
                  </button>
                }
                {data?.length && data && (
                  <button
                    onClick={handleClearFields}
                    className="mx-auto w-full border p-2 outline-none"
                  >
                    Clear All Fields
                  </button>
                )}
              </div>
            )}
            {!mobile && (
              <div className="relative flex w-full flex-col gap-2 p-4 mdx:px-0">
                <div
                  id="copy"
                  contentEditable={true}
                  className="h-[70vh] w-full overflow-y-scroll  border border-gray-300 bg-white p-4 placeholder:text-[8px] placeholder:text-gray-600 focus:outline-none"
                >
                  <WindupChildren>
                    {data?.length ? (
                      data?.map((el: string, index: number) => (
                        <p key={index} id={index.toString()}>
                          {el} <br></br>
                        </p>
                      ))
                    ) : isLoading ? (
                      <p className="flex items-center">
                        <svg
                          className="mr-2 inline w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                          />
                        </svg>
                        AI is Working, please wait this can take upto 40 sec...
                      </p>
                    ) : (
                      <p className="flex items-center">
                        <svg
                          className="mr-2 inline w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                          />
                        </svg>
                        AI will write content here!
                      </p>
                    )}
                  </WindupChildren>
                </div>
                <div className="flex justify-center gap-2 p-2 text-xs sm:justify-end">
                  <button
                    className="mb-1 cursor-pointer border rounded bg-gray-700 px-4 py-2 text-white"
                    onClick={handleCopyText}
                  >
                    {textCopy ? 'Text copied' : 'Copy to Clipboard'}
                  </button>
                  <button
                    className="mb-1 cursor-pointer border rounded bg-rose-600 p-2 text-white"
                    onClick={handleClearText}
                  >
                    <svg
                      className="w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>

                <div className="grid grid-cols-5 gap-5 p-4 m-4 border border-gray-200 ">
                  {ToolsLinks.map((section) => (
                    <div key={section.title} className="space-y-3">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-semibold text-gray-900">{section.title}</h3>
                      </div>
                      <div className="space-y-2">
                        {section.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block text-sm text-gray-600 hover:text-blue-500 hover:underline hover:bg-gray-50 px-2 py-1 rounded"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
      
     



          <FooterBig />
        </div>
      </main>
    </div>
  );
};

export default UI2;
