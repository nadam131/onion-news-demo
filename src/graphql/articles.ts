import { gql } from '@apollo/client';

export const GQL_QUERY_ARTICLES = gql`
  query ArticlesQuery {
    allArticles(orderBy: createdAt_DESC) {
      slug
      title
      createdAt
      hosted
      sourceUrl
      image {
        alt
        responsiveImage {
          alt
          aspectRatio
          sizes
          srcSet
          src
        }
        title
        url
      }
    }
  }
`;
