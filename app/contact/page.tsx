import { Suspense } from "react";
import Header from "@/components/Header";
import FooterBig from "@/components/FooterBig";
import bg from "@/app/about-3.gif";

import { getSEOTags } from "@/libs/seo";
import type { Metadata } from "next";

// SEO metadata for the contact page
export const metadata: Metadata = getSEOTags({
  title: "Contact ZeroTheorem - Investment Inquiries & Corporate Services",
  description:
    "Contact ZeroTheorem for investment opportunities and corporate services. Located in Surry Hills, NSW, Australia. Reach out for early-stage technology investment consultations.",
  keywords: [
    "contact zerotheorem",
    "investment inquiries",
    "corporate services",
    "investment consultation",
    "zerotheorem contact",
    "investment opportunities",
    "Surry Hills NSW",
    "Australia investment firm",
    "technology investment",
    "early stage investing",
  ],
  canonicalUrlRelative: "/contact",
  openGraph: {
    title: "Contact ZeroTheorem - Investment Inquiries & Corporate Services",
    description:
      "Contact ZeroTheorem for investment opportunities and corporate services. Located in Surry Hills, NSW, Australia.",
    url: "https://zerotheorem.com/contact",
  },
});

const Contact = () => {
  return (
    <>
      {/* <HelloBar /> */}
      <Suspense>
        <Header />
      </Suspense>

      {/* <main className="m-auto h-screen flex flex-col bg-[url('/bg.gif')] bg-cover bg-center bg-no-repeat"> */}
      <main className="m-auto flex flex-col">
        <div className="flex justify-between md:flex-row flex-col-reverse max-w-6xl w-full overflow-hidden gap-8 m-auto items-center p-10 md:py-24">
          <div className="flex flex-col gap-3 mt-10 w-full md:max-w-lg">
            <div className="md:text-4xl text-3xl mb-2 font-extrabold">
              ZERO THEOREM PTY LTD
            </div>

            <div className="text-sm">
              81-83 Campbell Street Surry Hills, NSW, 2010 Australia
            </div>

            <div className="text-xs text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] transition-colors duration-200">
              ABN: 30 642 102 663
            </div>
            <div className="text-xs text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] transition-colors duration-200">
              ACN: 642 102 663
            </div>

            <div className="text-xs text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] transition-colors duration-200">
              E: kh@zerotheorem.com
            </div>
            <div className="text-xs text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] transition-colors duration-200">
              P: +61 402 692545
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            {/* <img
            src={moon.src}
            className="w-[350px] grayscale text-center h-full object-cover"
          /> */}
            <img
              src={bg.src}
              className="w-full max-w-[380px] text-center h-full object-cover"
            />
          </div>
        </div>

        <FooterBig />
      </main>
    </>
  );
};

export default Contact;
