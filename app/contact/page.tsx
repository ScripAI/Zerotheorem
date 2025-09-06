"use client";

import { pageObj } from "@/components/PageObj";
import Typewriter from "typewriter-effect";
import HelloBar from "@/components/HelloBar";
import Card from "@/components/Card";
import { Suspense } from "react";
import Header from "@/components/Header";
import FooterBig from "@/components/FooterBig";
import aboutHero from "@/app/about-hero.gif";
import bg from "@/app/bg.gif";
import moon from "@/app/moon.gif";
import moon2 from "@/app/moon-2.gif";

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
      <main className="m-auto flex flex-col">
 

       

        <div className="flex justify-between md:flex-row flex-col-reverse max-w-6xl w-full overflow-hidden gap-8 m-auto items-center p-10 md:py-24">
          <div className="flex flex-col gap-3 mt-2">
            <div className="md:text-4xl text-3xl mb-2 font-extrabold">
              ZERO THEOREM PTY LTD
            </div>

            <div className="text-sm">
              81-83 Campbell Street Surry Hills, NSW, 2010 Australia
            </div>

            <div className="text-xs text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] transition-colors duration-200">ABN: 30 642 102 663</div>
            <div className="text-xs text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] transition-colors duration-200">ACN: 642 102 663</div>

            <div className="text-xs text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] transition-colors duration-200">E: kh@zerotheorem.com</div>
            <div className="text-xs text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] transition-colors duration-200">P: +61 402 692545</div>
          </div>

          <div className="flex flex-col items-center justify-center">
          {/* <img
            src={moon.src}
            className="w-[350px] grayscale text-center h-full object-cover"
          /> */}
           <img
            src={moon2.src}
            className="w-[350px] grayscale text-center h-full object-cover"
          />
        </div>
        </div>

        <FooterBig />
      </main>
    </>
  );
};

export default Home;
