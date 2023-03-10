export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId {
      
      
      
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($profileId: ID!, $bookId: String!) {
    saveBook(profileId: $profileId, sbookId: $bookId) {
      
    }
  }
`;