import { gql } from '@apollo/client';

export const GQL_QUERY_NAV = gql`
  query NavQuery($location: MenuLocationEnum = PRIMARY) {
    menuItems(where: { location: $location }) {
      nodes {
        id
        title: label
        url
      }
    }
  }
`;
