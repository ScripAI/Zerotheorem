"use client";

import { pageObj } from "@/components/PageObj";
import Typewriter from "typewriter-effect";
import HelloBar from "@/components/HelloBar";
import Card from "@/components/Card";
import { Suspense } from "react";
import Header from "@/components/Header";
import FooterBig from "@/components/FooterBig";

const Home = () => {
  return (
    <>
      <HelloBar />
      <Suspense>
        <Header />
      </Suspense>

      <main className="m-auto flex flex-col">
        <div className="line w-full pt-24 bg-gradient-to-t from-[hsl(var(--hero-gradient-from))] via-[hsl(var(--hero-gradient-via))] to-[hsl(var(--hero-gradient-to))] text-[hsl(var(--hero-text))] flex flex-col text-center text-base font-extrabold  xs:text-2xl sdm:text-4xl sm:gap-3 md:text-5xl mdx:text-6xl transition-colors duration-200">
          {/* <span>copy.ai but FREE</span> */}
          <span>Save $30/m ScripAI is FREE</span>
          {/* <span>10X faster & free way to </span> */}
          <span>write AI content for</span>
          {/* <span>to write anything with AI</span> */}
          <span className="text-rose-600">
            <Typewriter
              options={{
                strings: [
                  "Social Media Post",
                  "TikTok Script",
                  "Blog Post",
                  "Email Marketing",
                  "Instagram Reels",
                  "Facebook Ads",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        <div className="flex flex-col max-w-5xl m-auto items-center justify-center gap-6 p-4 pb-24">
          {/* <div className='bg-black text-white text-sm py-1 px-3 rounded-full'>ScripAI is FREE</div> */}

          <p className="text-center text-xs sm:text-base text-[hsl(var(--text-secondary))] transition-colors duration-200">
            {/* Save $30 - $60 every month on all AI tools! */}
            10X faster & free AI content tool!
          </p>
          <div className="flex w-fit items-center justify-around rounded bg-rose-600 p-2 px-4 text-white shadow-xl hover:bg-rose-700 transition-colors duration-200">
            <a href="/ai-tools">Try for Free!</a>
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
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center gap-1 text-center text-xs text-[hsl(var(--text-secondary))] sm:text-base transition-colors duration-200">
            <span>✓ No credit card required</span>
            <span>✓ No login is required</span>
          </div>
          <a
            className="sd:hidden"
            href="https://www.producthunt.com/posts/scrip-ai?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-scrip&#0045;ai"
            target="_blank"
          >
            <img
              className="w-36"
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=384573&theme=light"
            />
          </a>

          <iframe
            className="aspect-video w-11/12 border-4 border-black bg-black transition-colors duration-200"
            title="Scrip AI — AI TikTok, Reel &amp; YT Shorts Script Writer"
            src="https://www.youtube.com/embed/nKVBwT_F-bc"
            frameBorder="0"
          ></iframe>

          <div className="w-full pt-10 text-center font-bold xs:text-lg sdm:text-3xl md:text-4xl text-[hsl(var(--text-primary))] transition-colors duration-200">
            100% Free AI Use Cases!
            {pageObj?.length && <Card pageObj={pageObj} />}
          </div>

          <div className="flex w-[100%] flex-col items-center gap-6 bg-rose-600 px-2 py-10 text-center text-white xs:text-lg sdm:text-3xl">
            Stop wasting time & start creating
            <br /> awesome copy for free!
            <div className="flex w-fit items-center justify-around rounded bg-[hsl(var(--background))] p-2 px-4 text-lg text-[hsl(var(--text-primary))] transition-colors duration-200">
              <a href="/ai-tools" className="text-md">
                Try Scrip!
              </a>
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
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </div>
            <div className="flex flex-col items-center gap-1 text-center text-xs text-gray-200">
              <span>✓ No credit card required</span>
              <span>✓ No login is required</span>
            </div>
          </div>
        </div>
      </main>
      <FooterBig />
    </>
  );
};

export default Home;
