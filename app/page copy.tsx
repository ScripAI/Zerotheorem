"use client";

import { pageObj } from "@/components/PageObj";
import Typewriter from "typewriter-effect";
import HelloBar from "@/components/HelloBar";
import Card from "@/components/Card";
import { Suspense } from "react";
import Header from "@/components/Header";
import FooterBig from "@/components/FooterBig";
import aboutHero from "@/app/about-hero.gif";

const Home = () => {
  return (
    <>
      {/* <HelloBar /> */}
      <Suspense>
        <Header />
      </Suspense>

      <main className="m-auto h-screen flex flex-row-reverse">
        <div className="w-full flex flex-col items-center justify-center">
      <img src={aboutHero.src} className="w-full text-center h-full object-cover" />
      </div>

<div>
        <div className="line w-full pt-24 bg-gradient-to-t from-[hsl(var(--hero-gradient-from))] via-[hsl(var(--hero-gradient-via))] to-[hsl(var(--hero-gradient-to))] text-[hsl(var(--hero-text))] flex flex-col text-center text-base font-extrabold  xs:text-2xl sdm:text-4xl sm:gap-3 md:text-5xl mdx:text-6xl transition-colors duration-200">
          {/* <span>copy.ai but FREE</span> */}


          <span>We Are Scientists Searching for:</span>

          <span>Asymmetric Returns In Nascent Technologies</span>

          {/* <span>Save $30/m ScripAI is FREE</span> */}
          {/* <span>10X faster & free way to </span> */}
          {/* <span>write AI content for</span> */}
          {/* <span>to write anything with AI</span> */}
          {/* <span className="text-rose-600">
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
          </span> */}
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
    
   
        </div>
        </div>
      </main>
      <FooterBig />
    </>
  );
};

export default Home;
