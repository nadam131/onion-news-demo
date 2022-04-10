import type { AppProps } from 'next/app';
import Layout from '@components/Layout/Layout';
import '@styles/globals.css';
import App from 'next/app';
import { GQL_QUERY_NAV } from '@graphql/nav';
import client from 'apollo-client';

export default function MyApp({
  Component,
  pageProps: { navMain, ...pageProps },
}: AppProps) {
  return (
    <Layout navMain={navMain}>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);

  const {
    data: {
      menuItems: { nodes: navMain },
    },
  } = await client.query({
    query: GQL_QUERY_NAV,
    variables: {
      location: 'PRIMARY',
    },
  });

  return {
    pageProps: {
      ...appProps.pageProps,
      navMain,
    },
  };
};
