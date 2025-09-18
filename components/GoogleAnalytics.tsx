"use client";

import Script from "next/script";
import config from "@/config";

export default function GoogleAnalytics() {
  // Only render if Google Analytics is configured
  if (!config.googleAnalytics?.measurementId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalytics.measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${config.googleAnalytics.measurementId}');
        `}
      </Script>
    </>
  );
}
