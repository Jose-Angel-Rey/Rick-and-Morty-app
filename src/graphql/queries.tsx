import { gql } from "@apollo/client";

export const CHARACTERS = gql`
  query characters($page: Int) {
    characters(page: $page) {
      info {
        pages
        count
        next
        prev
      }
      results {
        id
        name
        image
        status
        species
        gender
        origin {
          name
          id
        }
      }
    }
  }
`;

export const CHARACTER_DETAIL = gql`
  query character($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
    }
  }
`;

// -----------------------------------------

export const EPISODES = gql`
  query episodes($page: Int) {
    episodes(page: $page) {
      info {
        pages
        count
        next
        prev
      }
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;
// ---------------------------------------

export const LOCATIONS = gql`
  query locations($page: Int) {
    locations(page: $page) {
      info {
        pages
        count
        next
        prev
      }

      results {
        name
        id
        type
        residents {
          id
          name
          image
          status
          species
          gender
          origin {
            id
            name
          }
        }
      }
    }
  }
`;
