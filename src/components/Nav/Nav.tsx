import Link from 'next/link';
import React from 'react';

export interface NavItem {
  id: string;
  url: string;
  title: string;
}

export interface NavProps {
  list: NavItem[];
}

const Nav = ({ list }: NavProps) => {
  return (
    <nav className="space-x-14">
      {list.map((item: NavItem) => {
        return (
          <Link href={item.url} key={item.id}>
            <a className="text-5xl">{item.title}</a>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
