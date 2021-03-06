import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import NextImage from 'next/image';

import client from 'apollo-client';
import { GQL_QUERY_ARTICLE } from '@graphql/article';
import { GQL_QUERY_ARTICLES } from '@graphql/articles';

import ReactMarkdown from 'react-markdown';
import { renderMetaTags } from 'react-datocms';

import ArticleInfo from '@components/ArticleInfo/ArticleInfo';
import { ArticleProps } from '@types';
import {
  formatArticle,
  isArticleHosted,
  mapArticleToNextPaths,
} from '@utils/article';

const PageArticle = ({
  title,
  categories,
  publicationDate,
  publisher,
  image,
  content,
  seo,
}: ArticleProps) => {
  return (
    <>
      {seo && <Head>{renderMetaTags(seo)}</Head>}
      <div className="container md:w-3/4 mx-auto space-y-8">
        <section className="space-y-3">
          <h1 className="font-mono leading-normal sm:leading-normal md:leading-normal xl:leading-normal text-2xl sm:text-3xl md:text-4xl xl:text-5xl">
            {title}
          </h1>
          <ArticleInfo
            date={publicationDate}
            publisher={publisher}
            categories={categories}
          />
        </section>
        {image && (
          <section className="aspect-video max-w-screen-sm relative">
            <NextImage
              src={image.url}
              alt={image.alt}
              blurDataURL={image.blurDataURL}
              layout="fill"
              placeholder="blur"
              objectFit="cover"
              objectPosition="center"
            />
          </section>
        )}
        <div className="text-md md:text-xl font-mono max-w-prose leading-relaxed md:leading-relaxed space-y-4">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default PageArticle;

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    data: { articles },
  } = await client.query({ query: GQL_QUERY_ARTICLES });

  const paths = articles.filter(isArticleHosted).map(mapArticleToNextPaths);

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const {
    data: { article },
  } = await client.query({
    query: GQL_QUERY_ARTICLE,
    variables: {
      filter: {
        slug: {
          eq: params?.slug,
        },
      },
    },
  });

  return {
    props: await formatArticle(article),
    revalidate: 60 * 5,
  };
};
