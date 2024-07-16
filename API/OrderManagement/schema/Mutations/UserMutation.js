const graphql = require("graphql");
const User = require("../Types/UserType");
const UserModel = require("../../models/users");
const Address = require("../Types/AddressType");

const { GraphQLList,GraphQLString, GraphQLInt,GraphQLInputObjectType } = graphql;


const AddressInputType = new GraphQLInputObjectType({
  name: 'AddressInput',
  fields: () => ({
    _id: { type: GraphQLInt },
    area: { type: GraphQLString },
    city: { type: GraphQLString },
    pincode: { type: GraphQLInt },
  }),
});

const USER_ADD = {
  type: User,
  args: {
    _id: { type: GraphQLInt},
    name: { type: GraphQLString},
    email: { type: GraphQLString},
    phone: { type: GraphQLString},
    address: { type: AddressInputType}
  },
  resolve: async (parent, args, context) => {
    const res = await context.addUser(args)
    console.log(res);
    return args;
  },
};

const USER_UPDATE = {
  type: User,
  args: {
    _id: { type: GraphQLInt},
    name: { type: GraphQLString},
    email: { type: GraphQLString},
    phone: { type: GraphQLString}
  },
  resolve: async (parent, args, context) => {
    console.log("context============>")
    const res = await context.updateUser(args)
    console.log(res);
    return args;
  },
};

const USER_DELETE = {
  
  type: User,
  args: {
    _id: { type: GraphQLInt}
  },
  resolve: async (parent, args, context) => {
    console.log("context============>")
    const res = await context.deleteUserById(args)
    console.log(res);
    return args;
  },
};

module.exports = {USER_ADD, USER_UPDATE, USER_DELETE};
