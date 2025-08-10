"use client"

import Footer from '@/components/Footer';
import HelloBar from '@/components/HelloBar';
import Menu from '@/components/Menu';
// import Nav from '@/components/Nav';
// import SEOMeta from '@/components/SEOMeta';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { tagObj } from '@/components/tagObj';
import { domainUrl } from '@/components/domainUrl';
import Tags from '@/components/Tags';
import FooterBig from '@/components/FooterBig';

interface HashtagProps {
  hashtag?: {
    tag?: string;
    serverTag?: string;
  };
}

interface TagObjItem {
  tag: string;
  posts: string;
}

const Tag = ({ hashtag }: HashtagProps) => {
  const params = useParams();
  const tagParam = params?.tag as string;

  console.log(tagParam?.replace('-', ' '));

  const tag = hashtag?.tag
    ? hashtag?.tag
    : hashtag?.serverTag?.replace('-', ' ') || tagParam?.replace('-', ' ');

  const [firstSet, setFirstSet] = useState<string>('Please Wait...');
  const [tagList, setTagList] = useState<string[]>();
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(firstSet);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const getData = async (tag: string) => {
    if (tag) {
      const response1 = await fetch('/api/getHashtag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tag: tag }),
      });

      const resData1 = await response1.json();

      const DataArr1 = resData1.result
        ?.replace(/"/g, '')
        ?.replace(/\n/g, ' ')
        ?.replace(/,/g, '')
        ?.toLowerCase()
        ?.split(' ')
        ?.slice(0, 30)
        ?.join(' ');

      const Data = resData1.result
        ?.replace(/"/g, '')
        ?.replace(/#/g, '')
        ?.replace(/\n/g, ' ')
        ?.replace(/,/g, '')
        ?.toLowerCase()
        ?.split(' ')
        ?.slice(0, 30);

      console.log(Data);

      setFirstSet(DataArr1 || '');
      setTagList(Data?.filter((item: string) => item !== ''));
    }
  };

  useEffect(() => {
    console.log('useEffect got called');

    if (tag) {
      getData(tag);
    }

    if (typeof window !== 'undefined' && (window as any).ezstandalone) {
      // Ensure `ezstandalone` is initialized
      (window as any).ezstandalone.cmd.push(function () {
        (window as any).ezstandalone.showAds();
      });
    }
  }, [tag]);

  if (!tag) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="relative">
        {/* <SEOMeta
          title={`Hashtags for ${tag} on Instagram, Tiktok in 2024 [Updated] - ScripAI`}
          description={`Top 30 ${tag} hashtags. Hashtags for #${tag} on Instagram, Tiktok, Twitter, & more. Best #${tag} hashtags. 2024 UPDATED!`}
          slug={tag}
          isHashtag={true}
        /> */}
        <HelloBar />
        <main>
          <div className="m-auto flex max-w-4xl flex-col items-center text-base">
            {/* <Nav /> */}
            {/* Ezoic - top_of_page - top_of_page */}
            <div id="ezoic-pub-ad-placeholder-101"></div>
            {/* End Ezoic - top_of_page - top_of_page */}
            <div className="flex w-full flex-col justify-around border-t p-4 mdx:flex-row">
              <div className="flex w-full flex-col gap-4">
                <h1 className="text-2xl font-bold">Hashtags for {tag}</h1>
                <h2 className="text-xl">
                  Top #{tag} hashtags on Instagram, Twitter, TikTok
                </h2>
                <div>
                  The most popular and related hashtag for #{tag} are as follows
                </div>
                <hr />
                <h3 className="text-lg">#{tag} Hashtags</h3>
                <div className="relative text-sm">
                  <div
                    className=" min-h-fit w-full rounded-md
                    border border-blue-600 bg-gray-50 p-4 pb-10"
                    spellCheck={false}
                    contentEditable={true}
                  >
                    {firstSet}
                  </div>
                  <button
                    onClick={handleCopy}
                    className="absolute bottom-3 right-3 float-right rounded-lg bg-black p-1 text-white "
                  >
                    {copied ? (
                      <svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="h-4 w-4 "
                      >
                        <path
                          clipRule="evenodd"
                          fillRule="evenodd"
                          d="M10.5 3A1.501 1.501 0 009 4.5h6A1.5 1.5 0 0013.5 3h-3zm-2.693.178A3 3 0 0110.5 1.5h3a3 3 0 012.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 01-3 3H6.75a3 3 0 01-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15z"
                        />
                      </svg>
                    ) : (
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <strong>
                  <div className="text-xs">
                    TIP: Instagram allows about 30 hashtags per post so make
                    sure you maximize the chance by adding all 30 hashtags in a
                    post
                  </div>
                </strong>
                {tagList && (
                  <>
                    <div className="flex flex-col gap-1.5">
                      <h3>Related Hashtags to #{tag}</h3>
                      <div className="text-sm">
                        Related hashtags are those words that are most commonly
                        used on Instagram in IG Post.
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 rounded-md border p-4 text-sm">
                      {tagList?.map((el, i) => (
                        <a key={i} href={`${domainUrl}/hashtag/${el}`}>
                          #{el}
                        </a>
                      ))}
                    </div>
                  </>
                )}
                <div>
                  We update this page frequently, make sure you bookmark this
                  website.
                </div>
                Love the Tool? Without you our platform is just a bunch of code
                here and there. Please Share Hashtaglly.com with friends. Thank
                you!
                <div>
                  View {tag} from Social Media Instagram, TikTok, Youtube,
                  Facebook, Twitter, Ello, Reddit, Line, Pinterest, Tumblr
                </div>
                {tagList && (
                  <div className="flex flex-wrap gap-1 text-xs">
                    {tagList?.map((el, i) => (
                      <a
                        href={`${domainUrl}/hashtag/${el}`}
                        className="rounded-md  border  px-2"
                        key={i}
                      >
                        {el}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <div className="mdx:hidden">
                <h3 className="py-4 text-xl font-bold">
                  Popular Related Instagram Hashtags
                </h3>
                <div className=" flex w-full cursor-pointer flex-col gap-2 pr-2">
                  {tagObj?.map((tagItem: TagObjItem) => {
                    return (
                      <a
                        key={tagItem?.tag}
                        href={`${domainUrl}/hashtag/${tagItem?.tag}`}
                        className="flex justify-between border-b pb-2 text-blue-600"
                      >
                        <span>#{tagItem?.tag}</span>
                        <span>{tagItem?.posts}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

            </div>
            {/* Ezoic - mid_content - mid_content  */}
            <div id="ezoic-pub-ad-placeholder-111"></div>
            {/* End Ezoic - mid_content - mid_content */}
            {/* <Tags /> */}
            <FooterBig />
          </div>
        </main>
      </div>
    </>
  );
};

export default Tag;
