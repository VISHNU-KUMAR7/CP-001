var mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fName: { type: String, require: true, trim: true },
  lName: { type: String, require: true, trim: true },
  password: { type: String, require: true, trim: true },
  eMail: { type: String, require: true, trim: true, unique: true },
  phoneNo: { type: String, require: true, trim: true },
  location: { type: String, require: true, trim: true },
  join: { type: Date, default: Date.now },
});

const userModel = mongoose.model(process.env.COLLECTION1_NAME, userSchema);

module.exports = userModel;
