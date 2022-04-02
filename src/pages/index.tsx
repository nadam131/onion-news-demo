import type { NextPage } from 'next';
import Head from 'next/head';

import client from 'apollo-client';
import { GQL_QUERY_ARTICLES } from '@graphql/articles';

import Container from '@components/Container/Container';
import ListArticles from '@components/List/ListArticles/ListArticles';

const PageHome: NextPage = ({ articles }: any) => {
  return (
    <div>
      <Head>
        <title>Onion News</title>
        <meta name="description" content="Finest news source." />
      </Head>
      <Container>
        <section>
          <ListArticles articles={articles} />
        </section>
      </Container>
    </div>
  );
};

export default PageHome;

export async function getStaticProps() {
  const {
    data: { articles },
  } = await client.query({
    query: GQL_QUERY_ARTICLES,
    variables: {
      orderBy: 'createdAt_DESC',
    },
  });

  return {
    props: {
      articles,
    },
  };
}
