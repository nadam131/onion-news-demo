import type { AppProps } from 'next/app';
import { Normalize } from 'styled-normalize';

import Layout from '@components/Layout/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Normalize />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
