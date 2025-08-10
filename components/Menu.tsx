import Link from 'next/link';
import { pageObj } from './PageObj';
import Card from './Card';
import React from 'react';

interface MenuProps {
  className?: string;
}

const Menu: React.FC<MenuProps> = ({ className = '' }) => {
  return    <div className="w-full pt-10 text-center font-bold xs:text-lg sdm:text-3xl md:text-4xl">
  {pageObj?.length && <Card pageObj={pageObj} />}
</div>
};

export default Menu;
