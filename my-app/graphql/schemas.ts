import { gql } from "graphql-tag";

//schemas (typeDefs)
//The schemas define the structure of the data and the queries that can be made to the server,
const typeDefs = gql`
  type Query {
    users: [User]
    searchUser(value: String): [User]
  }
  type Mutation {
    createUser(firstName: String, lastName: String): [User]
  }
  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    username: String
    image: String
  }
`;
export default typeDefs;
