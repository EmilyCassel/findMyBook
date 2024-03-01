const gql = String.raw;

const typeDefs = gql`
  type Note {
    _id: ID
    text: String
    createdAt: String
    updatedAt: String
  }

  type User {
    _id: String
    username: String
    email: String
  }

  type Query {
    getAllNotes: [Note]
   
  }

# type Mutation {}
`

module.exports = typeDefs