import React from 'react';
import styled from 'styled-components';

import NextImage from 'next/image';
import AspectRatio from '@components/AspectRatio/AspectRatio';
import Grid from '@components/Grid/Grid';

interface CardArticleProps {
  title: string;
  image: {
    url: string;
    alt: string;
  };
  publisher: string;
}

const CardArticle = ({ title, image, publisher }: CardArticleProps) => {
  return (
    <Grid columnGap={40}>
      {image && (
        <Column className="image">
          <AspectRatio ratio="16/9">
            <NextImage
              src={image.url}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </AspectRatio>
        </Column>
      )}
      <Column>
        <Title>{title}</Title>
        {publisher}
      </Column>
    </Grid>
  );
};

const Column = styled.div`
  grid-column: span 8;

  &.image {
    grid-column: span 4;
  }
`;
const Title = styled.h2`
  font-family: monospace;
  font-size: 32px;
`;

export default CardArticle;
