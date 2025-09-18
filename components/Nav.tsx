"use client"

import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-xl font-bold">
          Zerotheorem
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/hashtag" className="text-gray-600 hover:text-gray-900">
          Hashtag Generator
        </Link>
        <Link href="/ai-tools" className="text-gray-600 hover:text-gray-900">
          AI Tools
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
