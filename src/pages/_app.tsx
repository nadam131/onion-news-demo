import type { AppProps } from 'next/app';
import { Normalize } from 'styled-normalize';

import Layout from '@components/Layout/Layout';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

html,body {
  font-family: 'VT323', monospace; 
}

a {
    color: inherit;
    text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

* {
    box-sizing: border-box;
}
`;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Normalize />
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
