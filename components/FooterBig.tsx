/** @format */
"use client";

import Link from 'next/link';
import Image from 'next/image';
import config from '@/config';
import { Sparkle } from 'lucide-react';
import logo from '@/app/logo-2.png';
import logoDark from '@/app/logo-2-dark.png';
import { useTheme } from 'next-themes';
// import AnimatedLogo from './AnimatedLogo';
// Add the Footer to the bottom of your landing page and more.
// The support link is connected to the config.js file. If there's no config.mailgun.supportEmail, the link won't be displayed.

const FooterBig = () => {
  const { resolvedTheme } = useTheme();

  // Get the appropriate logo based on theme
  const getLogo = () => {
    return resolvedTheme === "dark" ? logoDark : logo;
  };
  return (
    <footer className='w-full mx-auto'>
      <div className='max-w-6xl mx-auto px-8 md:py-24 py-16'>
        <div className='flex justify-between lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col md:gap-40 gap-10'>
          <div className='w-72 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
       

        <Link
          href={"/"}
          className={`flex items-center gap-2 text-[hsl(var(--text-primary))] transition-colors duration-200`}
        >
         <Image src={getLogo()} alt={config.appName} width={80} height={80} />
        </Link>

            {/* <AnimatedLogo /> */}

            {/* <p className='mt-3 text-sm text-base-content/80'>
                100% Free AI Content Writer
            </p> */}
            <p className='mt-3 ml-2 text-xs text-[hsl(var(--text-secondary))] transition-colors duration-200'>
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>
          <div className='flex md:flex-row flex-col justify-end md:gap-10'>
            <div className='px-4 md:text-left text-center w-full'>
              <div className='footer-title font-semibold text-[hsl(var(--text-primary))] tracking-widest text-sm mb-3 transition-colors duration-200'>
                LINKS
              </div>

              <div className='flex flex-col justify-center gap-2 mb-10 text-sm'>
                <Link
                  href='/#'
                  className='link link-hover text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] transition-colors duration-200'>
                  Home
                </Link>
                <Link
                  href='/manifesto'
                  className='link link-hover text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] transition-colors duration-200'>
                  Manifesto
                </Link>
                {config.resend.supportEmail && (
                  <a
                    href={`mailto:${config.resend.supportEmail}`}
                    target='_blank'
                    className='link link-hover text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] transition-colors duration-200'
                    aria-label='Contact Support'>
                    Help
                  </a>
                )}
              </div>
            </div>

            <div className='px-4 md:text-left text-center w-full'>
              <div className='footer-title font-semibold text-[hsl(var(--text-primary))] tracking-widest text-sm mb-3 transition-colors duration-200'>
                LEGAL
              </div>

              <div className='flex flex-col justify-center gap-2 mb-10 text-sm'>
                <Link
                  href='/tos'
                  className='link link-hover whitespace-nowrap text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] transition-colors duration-200'>
                  Terms of services
                </Link>
                <Link
                  href='/privacy'
                  className='link link-hover whitespace-nowrap text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] transition-colors duration-200'>
                  Privacy policy
                </Link>
              </div>
            </div>

            <div className='px-4 md:text-left text-center w-full'>
              <div className='footer-title font-semibold text-[hsl(var(--text-primary))] tracking-widest text-sm mb-3 transition-colors duration-200'>
                SOCIAL
              </div>

              <div className='flex flex-col justify-center gap-2 mb-10 text-sm'>
                <Link
                  href='https://www.linkedin.com/in/sagarjaid/'
                  className='link link-hover text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] transition-colors duration-200'>
                  Instagram
                </Link>
                <Link
                  href='https://www.linkedin.com/in/sagarjaid/'
                  className='link link-hover text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] transition-colors duration-200'>
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBig;
