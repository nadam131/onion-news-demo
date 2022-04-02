import React from 'react';
import styled from 'styled-components';

import NextImage from 'next/image';
import AspectRatio from '@components/AspectRatio/AspectRatio';
import Grid from '@components/Grid/Grid';
import Link from 'next/link';
import ArticleInfo from '@components/ArticleInfo/ArticleInfo';
import { device } from '@constants/breakpoints';

interface CardArticleProps {
  title: string;
  slug: string;
  image: {
    url: string;
    alt: string;
  };
  publisher: {
    name: string;
  };
  publicationDate: string;
  sourceUrl: string;
  hosted: boolean;
}

const CardArticle = ({
  slug,
  title,
  image,
  publisher,
  publicationDate,
  hosted,
  sourceUrl,
}: CardArticleProps) => {
  const href = hosted ? `/${slug}` : sourceUrl;
  const target = hosted ? `_self` : '_blank';
  return (
    <Wrapper>
      {image && (
        <Column className="image">
          <Link href={href}>
            <a target={target}>
              <AspectRatio ratio="16/9">
                <NextImage
                  src={image.url}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </AspectRatio>
            </a>
          </Link>
        </Column>
      )}
      <Column>
        <Link href={href}>
          <a target={target}>
            <Title>{title}</Title>
          </a>
        </Link>
        <ArticleInfo date={publicationDate} publisher={publisher} />
      </Column>
    </Wrapper>
  );
};

const Wrapper = styled(Grid)`
  @media ${device.laptop} {
    grid-column-gap: 40px;
  }
`;

const Column = styled.div`
  grid-column: span 12;

  @media ${device.laptop} {
    grid-column: span 8;
    &.image {
      grid-column: span 4;
    }
  }
`;
const Title = styled.h2`
  font-family: monospace;
  font-size: 24px;
  margin-bottom: 14px;

  @media ${device.laptop} {
    font-size: 32px;
  }
`;

export default CardArticle;
