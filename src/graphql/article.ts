import { gql } from '@apollo/client';

export const GQL_QUERY_ARTICLE = gql`
  query ArticleQuery($filter: ArticleModelFilter) {
    article(filter: $filter) {
      title
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }
`;
