const mongoose = require("mongoose");

const AddressSchema = mongoose.Schema({
  _id: Number,
  city: String,
  area: String,
  pincode: Number,
});

const Address = mongoose.model("address", AddressSchema);

module.exports = Address;
