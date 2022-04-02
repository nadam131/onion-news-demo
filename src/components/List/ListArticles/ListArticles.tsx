import CardArticle from '@components/Card/CardArticle/CardArticle';
import Grid from '@components/Grid/Grid';
import { device } from '@constants/breakpoints';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

type ListArticlesProps = {
  articles: any;
};

const ListArticles = ({ articles }: ListArticlesProps) => {
  return (
    <Wrapper>
      {articles.map(({ id, ...article }: any) => {
        return (
          <Row key={id}>
            <CardArticle {...article} />
          </Row>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled(Grid)`
  grid-row-gap: 30px;

  @media ${device.laptop} {
    grid-row-gap: 60px;
  }
`;

const Row = styled.div`
  grid-column: span 12;
`;

export default ListArticles;
