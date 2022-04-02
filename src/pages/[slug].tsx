import React from 'react';
import Head from 'next/head';
import NextImage from 'next/image';
import styled from 'styled-components';
import { renderMetaTags } from 'react-datocms';

import client from 'apollo-client';
import { GQL_QUERY_ARTICLE } from '@graphql/article';
import { GQL_QUERY_ARTICLES } from '@graphql/articles';

import { isArticleHosted, mapArticleToNextPaths } from '@utils/article';
import AspectRatio from '@components/AspectRatio/AspectRatio';
import Grid from '@components/Grid/Grid';
import Container from '@components/Container/Container';
import ReactMarkdown from 'react-markdown';
import ArticleInfo from '@components/ArticleInfo/ArticleInfo';

type PageArticleProps = {
  title: string;
  content: string;
  publicationDate: string;
  publisher: any;
  image: any;
  seo: any;
  categories: any;
};

const PageArticle = ({
  title,
  categories,
  publicationDate,
  publisher,
  image,
  content,
  seo,
}: PageArticleProps) => {
  return (
    <>
      {seo && <Head>{renderMetaTags(seo)}</Head>}
      <Container>
        <Grid justify="center" rowGap={40}>
          <Title>{title}</Title>
          <ArticleInfo
            date={publicationDate}
            publisher={publisher}
            categories={categories}
          />
          {image && (
            <Image>
              <AspectRatio ratio="16/9">
                <NextImage
                  src={image.url}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </AspectRatio>
            </Image>
          )}
          <Content>
            <ReactMarkdown>{content}</ReactMarkdown>
          </Content>
        </Grid>
      </Container>
    </>
  );
};

const Title = styled.h1`
  font-size: 56px;
  font-family: monospace;
  text-align: center;
  margin-bottom: 0;
`;

const Image = styled.div`
  width: 600px;
`;

const Content = styled.div`
  max-width: 70%;
  font-family: sans-serif;
  font-size: 18px;
  line-height: 1.55;
`;

export default PageArticle;

export async function getStaticPaths() {
  const {
    data: { articles },
  } = await client.query({ query: GQL_QUERY_ARTICLES });

  const paths = articles.filter(isArticleHosted).map(mapArticleToNextPaths);

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  const {
    data: { article },
  } = await client.query({
    query: GQL_QUERY_ARTICLE,
    variables: {
      filter: {
        slug: {
          eq: params.slug,
        },
      },
    },
  });

  return {
    props: article,
  };
}
