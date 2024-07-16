
const mongoose = require('mongoose')
const User = require('./users')
const Address = require('./address')

async function getAllUsers() {

    return await User.find({}).populate("address").exec()
    
}

async function getUserById(id) {

    return await User.find({_id:id}).exec()
    
}

async function addUser(args) {


    const addressDoc = new Address()
    addressDoc._id =  args.address._id,
    addressDoc.area =  args.address.area,
    addressDoc.city =  args.address.city,
    addressDoc.pincode =  args.address.pincode

    const addr = await addressDoc.save()

    const userDoc = new User()
    userDoc._id = args._id,
    userDoc.name = args.name,
    userDoc.email = args.email,
    userDoc.phone = args.phone,
    userDoc.address = addressDoc
    const user = await userDoc.save()

    return user

    // return await User.create({
    //     _id:args._id,
    //     name:args.name,
    //     email:args.email,
    //     phone: args.phone,
    //     address: args.address

    // })
    
}

async function updateUser(args) {
    let filter = {_id: args._id}
    let update = {name: args.name,  email:args.email,
        phone: args.phone}
    return await User.findOneAndUpdate(filter, update, {new:true})
    
}

async function deleteUserById(args) {
  
    return await User.deleteOne({_id:args._id})
    
}

module.exports = { getAllUsers, getUserById, addUser, updateUser, deleteUserById }