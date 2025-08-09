/** @format */

import Link from 'next/link';
import Image from 'next/image';
import config from '@/config';
import logo from '@/app/icon.png';
import { Sparkles } from 'lucide-react';
// import AnimatedLogo from './AnimatedLogo';
// Add the Footer to the bottom of your landing page and more.
// The support link is connected to the config.js file. If there's no config.mailgun.supportEmail, the link won't be displayed.

const FooterBig = () => {
  return (
    <footer className='w-full mx-auto border-t border-base-content/10'>
      <div className='max-w-5xl mx-auto px-8 md:py-24 py-16'>
        <div className=' flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col md:gap-40 gap-10'>
          <div className='w-72 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
          <Link
          href={"/"}
          className={`flex flex-1 items-center gap-2 px-1.5 py-2 rounded-lg  text-gray-900 `}
        >
          <Sparkles
            strokeWidth={1}
            color="#F43F5E"
            fill="#F43F5E"
            className={"w-6  h-6"}
          />
          <span className="font-extrabold text-2xl">{config.appName}</span>
        </Link>

            {/* <AnimatedLogo /> */}

            {/* <p className='mt-3 text-sm text-base-content/80'>
                100% Free AI Content Writer
            </p> */}
            <p className='mt-3 ml-2 text-xs text-base-content/60'>
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>
          <div className='flex md:flex-row flex-col justify-end md:gap-10'>
            <div className='px-4 md:text-left text-center w-full'>
              <div className='footer-title font-semibold text-base-content tracking-widest text-sm mb-3'>
                LINKS
              </div>

              <div className='flex flex-col justify-center  gap-2 mb-10 text-sm'>
                <Link
                  href='/#'
                  className='link link-hover'>
                  Home
                </Link>
                <Link
                  href='/manifesto'
                  className='link link-hover'>
                  Manifesto
                </Link>
                {config.resend.supportEmail && (
                  <a
                    href={`mailto:${config.resend.supportEmail}`}
                    target='_blank'
                    className='link link-hover'
                    aria-label='Contact Support'>
                    Help
                  </a>
                )}
              </div>
            </div>

            <div className='px-4 md:text-left text-center w-full'>
              <div className='footer-title font-semibold text-base-content tracking-widest text-sm  mb-3'>
                LEGAL
              </div>

              <div className='flex flex-col justify-center gap-2 mb-10 text-sm'>
                <Link
                  href='/tos'
                  className='link link-hover whitespace-nowrap'>
                  Terms of services
                </Link>
                <Link
                  href='/privacy'
                  className='link link-hover whitespace-nowrap'>
                  Privacy policy
                </Link>
              </div>
            </div>

            <div className='px-4 md:text-left text-center w-full'>
              <div className='footer-title font-semibold text-base-content tracking-widest text-sm mb-3'>
                SOCIAL
              </div>

              <div className='flex flex-col justify-center  gap-2 mb-10 text-sm'>
                <Link
                  href='https://www.linkedin.com/in/sagarjaid/'
                  className='link link-hover'>
                  Instagram
                </Link>
                <Link
                  href='https://www.linkedin.com/in/sagarjaid/'
                  className='link link-hover'>
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
