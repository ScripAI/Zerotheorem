import { Suspense } from "react";
import Header from "@/components/Header";
import FooterBig from "@/components/FooterBig";
import ButtonLearnMore from "@/components/ButtonLearnMore";
import pattern from "@/app/pattern-1.gif";
import { getSEOTags, renderSchemaTags } from "@/libs/seo";
import type { Metadata } from "next";

// Enhanced SEO metadata for the home page
export const metadata: Metadata = getSEOTags({
  title: "ZeroTheorem - Bitcoin Tail Risk Warehousing & Asymmetric Returns",
  description:
    "ZeroTheorem specializes in Bitcoin tail risk warehousing, delivering stable returns and uncorrelated alpha through quantitative risk management and early-stage technology investments.",
  keywords: [
    "bitcoin tail risk",
    "investment firm",
    "asymmetric returns",
    "quantitative finance",
    "risk management",
    "bitcoin investment",
    "cryptocurrency trading",
    "alternative investments",
    "portfolio optimization",
    "uncorrelated alpha",
    "stable returns",
    "financial services",
    "investment management",
    "blockchain investment",
    "early stage investing",
  ],
  canonicalUrlRelative: "/",
  openGraph: {
    title: "ZeroTheorem - Bitcoin Tail Risk Warehousing & Asymmetric Returns",
    description:
      "Specialized investment firm delivering stable returns and uncorrelated alpha through Bitcoin tail risk warehousing and quantitative risk management.",
    url: "https://zerotheorem.com/",
  },
  extraTags: {
    "article:author": "ZeroTheorem Investment Team",
    "article:section": "Investment Management",
    "article:tag": [
      "Bitcoin",
      "Investment",
      "Risk Management",
      "Quantitative Finance",
    ],
  },
});

const Home = () => {
  return (
    <>
      {renderSchemaTags("home")}
      {/* <HelloBar /> */}
      <Suspense>
        <Header />
      </Suspense>

      {/* <main className="m-auto h-screen flex flex-col bg-[url('/bg.gif')] bg-cover bg-center bg-no-repeat"> */}
      {/* <main className="m-auto flex flex-col bg-[url('/bg-grid.svg')] bg-cover bg-center bg-no-repeat"> */}
      <main className="m-auto flex flex-col">
        {/* <div className="flex flex-col items-center justify-center">
      <img src={aboutHero.src} className="w-1/2 text-center h-full object-cover" />
      </div> */}

        {/* <div className="flex flex-col items-center justify-center">
          <img
            src={bg.src}
            className="w-[300px] text-center h-full object-cover"
          />
        </div> */}

        <div className="flex md:flex-row flex-col-reverse max-w-6xl w-full overflow-hidden m-auto items-center justify-center px-8 py-10 md:py-24">
          <div className="flex flex-col md:gap-3 gap-2 w-full">
            <div className="text-lg font-abold ml-1 uppercase ">
              Zerotheorem
            </div>
            <div className="md:text-6xl text-4xl font-extrabold">
              Warehousing
            </div>
            <div className="md:text-6xl text-4xl font-extrabold">
              Bitcoin Tail Risk
            </div>

            <div className="text-base mt-1.5 font-light text-gray-400">
              Delivering stable returns & uncorrelated alpha
            </div>
            <ButtonLearnMore href="/about" text="Learn More" className="mt-6" />
          </div>

          {/* <ParticleHead /> */}
          <img
            src={pattern.src}
            // className="w-[380px] text-center h-full object-cover"
            className="w-full  max-w-[480px]  text-center h-full object-cover"
          />
        </div>

        <FooterBig />
      </main>
    </>
  );
};

export default Home;
