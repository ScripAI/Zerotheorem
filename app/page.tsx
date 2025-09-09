"use client";

import { pageObj } from "@/components/PageObj";
import Typewriter from "typewriter-effect";
import HelloBar from "@/components/HelloBar";
import Card from "@/components/Card";
import { Suspense } from "react";
import Header from "@/components/Header";
import FooterBig from "@/components/FooterBig";
import ButtonLearnMore from "@/components/ButtonLearnMore";
import aboutHero from "@/app/about-hero.gif";
import bg from "@/app/bg.gif";
import dynamic from "next/dynamic";

const ParticleHead = dynamic(() => import("@/components/ParticleHead"), {
  ssr: false,
});

const Home = () => {
  return (
    <>
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

            <div className="text-xs mt-1.5 font-light text-gray-700">
              We invest early, before trends hit the mainstream
            </div>
            <ButtonLearnMore href="/about" text="Learn More" className="mt-6" />
          </div>

          <ParticleHead />
        </div>

        <FooterBig />
      </main>
    </>
  );
};

export default Home;
