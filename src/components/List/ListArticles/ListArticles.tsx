import CardArticle from '@components/Card/CardArticle/CardArticle';
import Grid from '@components/Grid/Grid';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

type ListArticlesProps = {
  articles: any;
};

const ListArticles = ({ articles }: ListArticlesProps) => {
  return (
    <Grid rowGap={40}>
      {articles.map(
        ({ id, title, slug, image, publisher, hosted, sourceUrl }: any) => {
          const href = hosted ? `/${slug}` : sourceUrl;
          const target = hosted ? '_self' : '_blank';
          return (
            <Row key={id}>
              <Link href={href}>
                <a target={target}>
                  <CardArticle
                    title={title}
                    image={image}
                    publisher={publisher}
                  />
                </a>
              </Link>
            </Row>
          );
        }
      )}
    </Grid>
  );
};

const Row = styled.div`
  grid-column: span 12;
`;

export default ListArticles;
