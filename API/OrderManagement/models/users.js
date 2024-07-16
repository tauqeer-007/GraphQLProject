const mongoose = require("mongoose");
const AddressModel = require("./address");

const UserSchema = mongoose.Schema({
  _id: Number,
  name: String,
  email: String,
  phone: String,
  address: {
    type: Number,
    ref:"address",
  },
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
