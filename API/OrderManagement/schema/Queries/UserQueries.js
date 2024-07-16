const graphql = require("graphql");
const User = require('../Types/UserType')
const UserModel = require('../../models/users')

const {
  GraphQLList,
  GraphQLInt
} = graphql;


const USER_LIST = {
    type: new GraphQLList(User),
    resolve: async(src, args, context) => {
      console.log("context=======>",context)
     return await context.mycontext.getAllUsers()
    },
  }

  const GET_USER = {
    type: User,
    args:{
      _id: {type:GraphQLInt}
    },
    resolve: async(src, args,context) => {
     return await context.mycontext.getUserById(args._id)
    },
  }


  module.exports = {USER_LIST, GET_USER};
