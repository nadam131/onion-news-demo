import React from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <header className="border-b-2 border-black py-3">
        <div className="container mx-auto md:w-3/4">
          <Link href="/">
            <a className="text-5xl">ONION NEWS</a>
          </Link>
        </div>
      </header>
      <main className="mb-auto py-10 pb-14">{children}</main>
      <footer className="border-t-2 border-black">
        <div className="container py-3 mx-auto text-center">
          created by{' '}
          <Link href="https://www.instagram.com/nadam131/">
            <a target="_blank" rel="noreferrer">
              nadam131
            </a>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
