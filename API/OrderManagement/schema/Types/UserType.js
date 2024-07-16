const graphql = require("graphql");
const Address = require ("./AddressType");

const {
  GraphQLInt,
  GraphQLString,
  GraphQLObjectType,
} = graphql;

const User = new GraphQLObjectType({
  name: "user",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    address : {type : Address}
  },
});


module.exports = User