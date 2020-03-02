import { gql } from 'apollo-boost';

export const entityFragment = gql`
  fragment EntityFragment on Entity {
    id
    parent
    title
    image
    description
    rate
    location
    createdAt
  }
`;
