import { Suspense } from "react";
import Header from "@/components/Header";
import FooterBig from "@/components/FooterBig";
import aboutHero from "@/app/about-hero.gif";
import bg from "@/app/about-hero.gif";
import stats from "@/app/stats.png";
import ButtonLearnMore from "@/components/ButtonLearnMore";
import { getSEOTags } from "@/libs/seo";
import type { Metadata } from "next";

// SEO metadata for the about page
export const metadata: Metadata = getSEOTags({
  title: "About ZeroTheorem - Investment Philosophy & Mission",
  description:
    "Learn about ZeroTheorem's mission to maximize investment utility while minimizing downside risk. Our team of PhD scientists focuses on early-stage technology investments and uncorrelated income streams.",
  keywords: [
    "about zerotheorem",
    "investment philosophy",
    "investment mission",
    "PhD scientists",
    "early stage investing",
    "technology investments",
    "risk management",
    "uncorrelated income",
    "investment strategy",
    "corporate services",
  ],
  canonicalUrlRelative: "/about",
  openGraph: {
    title: "About ZeroTheorem - Investment Philosophy & Mission",
    description:
      "Learn about ZeroTheorem's mission to maximize investment utility while minimizing downside risk through early-stage technology investments.",
    url: "https://zerotheorem.com/about",
  },
});

const About = () => {
  return (
    <>
      {/* <HelloBar /> */}
      <Suspense>
        <Header />
      </Suspense>

      {/* <main className="m-auto h-screen flex flex-col bg-[url('/bg.gif')] bg-cover bg-center bg-no-repeat"> */}
      <main className="m-auto flex flex-col">
        <div className="flex justify-between md:flex-row flex-col-reverse max-w-6xl w-full overflow-hidden gap-4 m-auto items-center p-10 md:pt-24">
          <div className="flex flex-col gap-3 md:max-w-lg mt-12 w-full">
            <div className="text-base">Our Mission</div>

            <div className="md:text-4xl text-3xl font-extrabold">
              To maximise investment utility whilst minimising downside risk
            </div>

            {/* <div className="text-xs mt-1.5 font-light text-gray-700">
              We invest early, before trends hit the mainstream
            </div> */}
            {/* <a
              href="/ai-tools"
              className="flex items-center gap-2 bg-black px-4 py-2 w-fit text-white mt-6"
            >
              <span className="text-sm font-semibold">Learn More</span>
              <svg
                className="w-4"
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
            </a> */}
          </div>

          <div className="flex flex-col items-center justify-center">
            <img
              src={bg.src}
              className="w-[450px] text-center h-full object-cover"
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-center max-w-6xl w-full overflow-hidden gap-8 m-auto items-center p-10">
          <div>
            <div className="text-base"> Who are we?</div>
            <div className="text-sm mt-2 text-justify">
              We are a group of PhD’s from natural sciences dedicated to finding
              answers to complex and difficult problems. As early Bitcoin
              advocates and blockchain investors, we love to challenge the
              de-facto paradigm and are uncompromising in our pursuit for
              greatness. We accept that change is a natural part of our journey
              and we don’t know everything about everything. However by better
              understanding ourselves we may be better at interpreting the world
              around us.
            </div>
          </div>
          <div>
            <div className="text-base"> What do we do?</div>
            <div className="text-sm mt-2 text-justify">
              With our global network, we identify investment opportunities that
              have yet to fully mature at a local level. We work with diverse
              set of investments to produce an optimal yield structure with
              uncorrelated income streams. Our goal is to manage an increasing
              set of income producing assets that when effectively combined
              produce a net ZERO risk profile. Our day to day activities range
              for direct currency & equity investments, corporate consulting and
              small business venture capital.
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-3 m-auto max-w-lg mt-20 mb-10">
          <div className="md:text-4xl text-3xl font-extrabold">
            Corporate Services
          </div>

          <div className="text-base text-center">
            If you would like further information regarding corporate services
            please feel free to contact us directly.
          </div>

          <ButtonLearnMore href="/contact" text="Contact" className="mt-6" />
        </div>

        <FooterBig />
      </main>
    </>
  );
};

export default About;
