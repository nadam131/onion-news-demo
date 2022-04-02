import { gql } from '@apollo/client';

export const GQL_QUERY_ARTICLES = gql`
  query ArticlesQuery($orderBy: [ArticleModelOrderBy]) {
    articles: allArticles(orderBy: $orderBy) {
      id
      slug
      title
      publicationDate
      hosted
      sourceUrl
      publisher {
        name
      }
      image {
        alt
        url
      }
    }
  }
`;
