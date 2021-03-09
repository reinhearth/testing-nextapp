import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type SearchItems {
    author: Author!
    categories: [String!]!
    items: [ItemSearch!]!
  }

  type DescriptionItem {
    author: Author!
    item: ItemDescription!
    picture: String!
    condition: String!
    free_shipping: Boolean!
    sold_quantity: Int!
    description: String!
  }

  type Author {
    name: String!
    lastname: String!
  }

  type Price {
      currency: String!
      amount: Int!
      decimals: Int
  }

  type ItemSearch {
      id: String!
      title: String!
      price: Price!
      picture: String!
      condition: String!
      free_shipping: Boolean!
      from: String!
  }

  type ItemDescription {
      id: String!
      title: String!
      price: Price! 
  }
  
  type Query {
    getSearchItems(search: String!): SearchItems
    getDescriptionItem(id: String!): DescriptionItem!
  }
`;
