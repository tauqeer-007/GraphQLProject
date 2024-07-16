var express = require("express")
var { createHandler } = require("graphql-http/lib/use/express")
var { ruruHTML } = require("ruru/server")
var UserModel=require("./models/users.js"); // once u export here u can put in handler as DI
require('./config/db.js')
const cors = require('cors')
const { getAllUsers, getUserById, addUser, updateUser, deleteUserById} = require('./models/UserImpl.js')

const app = express()
const PORT = 4600
app.use(cors())

const userschema = require('./schema/index.js')

var mycontext={
    "getAllUsers":getAllUsers,
    "getUserById":getUserById,
    "addUser":addUser,
    "updateUser": updateUser,
    "deleteUserById": deleteUserById
  }
  

let companyDetails = {
    "companyName":"Neosoft"

}

app.all(
    "/graphql",
    createHandler({
        schema: userschema,
        rootValue: companyDetails,
        context: (req) => ({
            ip: req.raw.ip,
            mycontext : mycontext

        })
    })
)



app.listen(PORT)

app.get("/", (_req, res) => {
    res.type("html")
    res.end(ruruHTML({ endpoint: "/graphql" }))
  })