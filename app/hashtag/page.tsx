"use client"

import HelloBar from '@/components/HelloBar';
import Nav from '@/components/Nav';
import SEOMeta from '@/components/SEOMeta';
import Typewriter from 'typewriter-effect';
import { domainUrl } from '@/components/domainUrl';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Tags from '@/components/Tags';
import Footer from '@/components/Footer';

const Hashtags = () => {
  const router = useRouter();
  const [hashtag, setHashtag] = useState<string>('');

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    let tag = e.target.value;
    setHashtag(tag);
    console.log(tag);
    console.log(tag?.length);
    let tagurl = tag.replace(' ', '-');
    console.log(tagurl);
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      let tag = e.currentTarget.value;
      console.log(tag);
      let tagurl = tag.replace(' ', '-');
      console.log(tagurl);
      const href = `/hashtag/${tagurl}`;
      router.push(href);
    }
  };

  const handleClick = (tag: string) => {
    console.log(tag);
    console.log(tag?.length);
    let tagurl = tag.replace(' ', '-');
    console.log(tagurl);
    if (tag.length > 2) {
      const href = `/hashtag/${tagurl}`;
      router.push(href);
    }
  };

  useEffect(() => {
    console.log('useEffect got called');

    if (typeof window !== 'undefined' && (window as any).ezstandalone) {
      // Ensure `ezstandalone` is initialized
      (window as any).ezstandalone.cmd.push(function () {
        (window as any).ezstandalone.showAds();
      });
    }
  }, []);

  return (
    <>
      <SEOMeta
        title="Hashtag Generator [100% FREE - No Login required] — Scrip AI"
        description="Try the FREE Social media Hashtag Generator powered by AI today and watch your posts go viral! FREE Hashtag Generator by Scrip AI."
        slug="hashtag"
      />
      <HelloBar />
      <main>
        <div className="m-auto flex max-w-5xl flex-col items-center text-sm">
          <Nav />
          {/* Ezoic - top_of_page - top_of_page */}
          <div id="ezoic-pub-ad-placeholder-101"></div>
          {/* End Ezoic - top_of_page - top_of_page */}
          <div className="flex w-full flex-col items-center gap-10 p-4 pb-20 pt-24">
            <div className="line flex flex-col items-center text-center text-2xl font-extrabold sdm:text-4xl sm:gap-3 md:text-5xl mdx:text-6xl ">
              <span>Find Best Hashtags for</span>
              <span className="text-rose-600">
                <Typewriter
                  options={{
                    strings: ['Youtube', 'TikTok', 'Instagram', 'Facebook'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>

            <div className="flex w-full items-center justify-center ">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="relative left-9 h-4 w-4 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
                />
              </svg>
              <input
                type="text"
                placeholder="Search a hashtag here..."
                className="h-12 w-full rounded-full border-2  border-gray-600 p-3 px-10  shadow-sm placeholder:text-center placeholder:text-xs placeholder:text-gray-600 sdm:max-w-lg"
                value={hashtag}
                onChange={handleValue}
                onKeyPress={handleSearch}
              />
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="relative right-10 h-8 w-8 cursor-pointer rounded-full border p-2"
                onClick={() => handleClick(hashtag)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>

            <div className="flex flex-col items-center gap-1 text-center text-xs text-gray-600 ">
              <span>✓ No credit card required</span>
              <span>✓ No login is required</span>
            </div>
          </div>
          {/* Ezoic - mid_content - mid_content  */}
          <div id="ezoic-pub-ad-placeholder-111"></div>
          {/* End Ezoic - mid_content - mid_content */}
          <Tags />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Hashtags;
