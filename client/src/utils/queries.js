export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      bookCount
      savedBooks
      
    }
  }
`;

export const SEARCH_GOOGLE_BOOKS = gql`
  query allProfiles {
    profiles {
      bookCount
      savedBooks
      
    }
  }
`;