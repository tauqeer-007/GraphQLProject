const graphql = require("graphql");
const {USER_LIST, GET_USER} = require("./Queries/UserQueries");
const { USER_ADD, USER_UPDATE, USER_DELETE } = require("./Mutations/UserMutation");

const { GraphQLObjectType, GraphQLSchema } = graphql;

const rootQuery = new GraphQLObjectType({
  name: "userlist",
  fields: {
    fetchUsers: USER_LIST,
    getUser: GET_USER
  },
});

const rootMutation = new GraphQLObjectType({
  name: "createuser",
  fields: {
    addUser: USER_ADD,
    updateUser: USER_UPDATE,
    deleteUser: USER_DELETE
  },
});

module.exports = new GraphQLSchema({ query: rootQuery, mutation:rootMutation });
