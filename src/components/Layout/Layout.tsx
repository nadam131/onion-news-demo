import Nav, { NavItem } from '@components/Nav/Nav';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  navMain: NavItem[];
}

const Layout = ({ children, navMain }: LayoutProps) => {
  return (
    <div className="flex h-screen justify-between">
      <aside className="w-15 h-screen flex justify-center pointer-events-none border-r-4">
        <span className="aside rotate-180 text-6xl opacity-[.15] whitespace-nowrap">
          WOTAFAK @ WOTAFAK $ WOTAFAK % WOTAFAK ! WOTAFAK @ WOTAFAK $
        </span>
      </aside>
      <div className="flex-1 p-20 pr-0">
        <header className="w-200 relative">
          <span className="text-6xl opacity-[.15] absolute right-0 left-0 overflow-hidden">
            wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
          </span>
          <div className="flex w-full justify-center items-center absolute z-10 top-0 h-[60px]">
            <div className="p-10 bg-white">
              <Nav list={navMain} />
            </div>
          </div>
        </header>
        <main className="mb-auto pb-14 lg:py-14">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
