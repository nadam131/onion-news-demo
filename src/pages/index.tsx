import Head from 'next/head';

import client from 'apollo-client';
import { GQL_QUERY_ARTICLES } from '@graphql/articles';

import ListArticles from '@components/ListArticles/ListArticles';
import { ArticleProps } from '@types';
import { formatArticle } from '@utils/article';

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
  const { data } = await client.query({
    query: GQL_QUERY_ARTICLES,
    variables: {
      orderBy: 'publicationDate_DESC',
    },
  });

  const articles = await Promise.all(data.articles.map(formatArticle));

  return {
    props: {
      articles,
    },
    revalidate: 60 * 5,
  };
}
