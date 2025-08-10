"use client"

import React from 'react';
import Head from 'next/head';

interface SEOMetaProps {
  title: string;
  description: string;
  slug?: string;
  isHashtag?: boolean;
}

const SEOMeta = ({ title, description, slug, isHashtag }: SEOMetaProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={isHashtag ? `hashtags, ${slug}, instagram, tiktok, social media` : 'hashtags, social media'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default SEOMeta;
