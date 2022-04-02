import React from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <header className="border-b-2 border-black">
        <div className="container py-10 mx-auto">
          <Link href="/">ONION NEWS</Link>
        </div>
      </header>
      <main className="mb-auto">{children}</main>
      <footer className="border-t-2 border-black">
        <div className="container py-10 mx-auto">created by nadam131</div>
      </footer>
    </div>
  );
};

export default Layout;
