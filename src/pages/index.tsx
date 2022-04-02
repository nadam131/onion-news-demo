import Head from 'next/head';

import client from 'apollo-client';
import { GQL_QUERY_ARTICLES } from '@graphql/articles';

import ListArticles from '@components/List/ListArticles/ListArticles';
import { ArticleProps } from '@types';

interface PageHomeProps {
  articles: ArticleProps[];
}

const PageHome = ({ articles }: PageHomeProps) => {
  return (
    <>
      <Head>
        <title>Onion News</title>
        <meta name="description" content="Finest news source" />
      </Head>
      <div className="container mx-auto md:w-3/4">
        <ListArticles articles={articles} />
      </div>
    </>
  );
};

export default PageHome;

export async function getStaticProps() {
  const {
    data: { articles },
  } = await client.query({
    query: GQL_QUERY_ARTICLES,
    variables: {
      orderBy: 'publicationDate_DESC',
    },
  });

  return {
    props: {
      articles,
    },
    revalidate: 60 * 5,
  };
}
