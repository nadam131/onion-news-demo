import { gql } from '@apollo/client';

export const GQL_QUERY_ARTICLES = gql`
  query ArticlesQuery {
    articles: posts {
      nodes {
        id
        title
      }
    }
  }
`;
