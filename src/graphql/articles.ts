import { gql } from '@apollo/client';

export const GQL_QUERY_ARTICLES = gql`
  query ArticlesQuery($orderBy: [ArticleModelOrderBy]) {
    articles: allArticles(orderBy: $orderBy) {
      id
      slug
      title
      createdAt
      hosted
      sourceUrl
      image {
        alt
        url
      }
    }
  }
`;
