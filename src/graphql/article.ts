import { gql } from '@apollo/client';

export const GQL_QUERY_ARTICLE = gql`
  query ArticleQuery($filter: ArticleModelFilter) {
    article(filter: $filter) {
      title
      image {
        alt
        url
      }
      categories {
        name
      }
      publicationDate
      publisher {
        name
      }
      content
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }
`;
