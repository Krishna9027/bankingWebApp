const mongoose = require("mongoose");

const CustomerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  serialnumber: {
    type: Number,
    require: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  accountnumber: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Customer", CustomerSchema);
