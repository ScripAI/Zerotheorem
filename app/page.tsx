import { Suspense } from "react";
import Header from "@/components/Header";
import FooterBig from "@/components/FooterBig";
import ButtonLearnMore from "@/components/ButtonLearnMore";
import pattern from "@/app/pattern-1.gif";
import { getSEOTags, renderSchemaTags } from "@/libs/seo";
import type { Metadata } from "next";

// SEO metadata for the home page
export const metadata: Metadata = getSEOTags({
  title: "ZeroTheorem - Asymmetric Returns in Nascent Technologies",
  description:
    "ZeroTheorem is an investment firm specializing in asymmetric returns from nascent technologies. We invest early in emerging trends before they hit the mainstream, maximizing utility while minimizing downside risk.",
  keywords: [
    "investment firm",
    "nascent technologies",
    "asymmetric returns",
    "early stage investing",
    "blockchain investment",
    "cryptocurrency investment",
    "venture capital",
    "alternative investments",
    "risk management",
    "portfolio optimization",
  ],
  canonicalUrlRelative: "/",
  openGraph: {
    title: "ZeroTheorem - Asymmetric Returns in Nascent Technologies",
    description:
      "Investment firm specializing in early-stage technology investments with focus on asymmetric returns and risk minimization.",
    url: "https://zerotheorem.com/",
  },
});

const Home = () => {
  return (
    <>
      {renderSchemaTags()}
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
          <div className="flex flex-col gap-3 w-full">
            <div className="text-sm ml-1">We Are Scientists Searching for</div>
            <div className="md:text-5xl text-3xl font-extrabold">
              Asymmetric Returns{" "}
            </div>
            <div className="md:text-5xl text-3xl font-extrabold">
              In Nascent Technologies{" "}
            </div>

            <div className="text-xs mt-1.5 font-light text-gray-400">
              We invest early, before trends hit the mainstream
            </div>
            <ButtonLearnMore href="/about" text="Learn More" className="mt-6" />
          </div>

          {/* <ParticleHead /> */}
          <img
            src={pattern.src}
            className="w-full max-w-[480px] text-center h-full object-cover"
          />
        </div>

        <FooterBig />
      </main>
    </>
  );
};

export default Home;
