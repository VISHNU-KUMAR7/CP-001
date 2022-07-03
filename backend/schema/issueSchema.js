var mongoose = require("mongoose");

const issueSchema = mongoose.Schema({
  description: { type: String, require: true, trim: true },
  severity: { type: String, require: true, trim: true },
  status: { type: String, require: true, trim: true },
  eMail: { type: String, require: true, trim: true },
  date: { type: Date, default: Date.now },
});

const issueModel = mongoose.model(process.env.COLLECTION2_NAME, issueSchema);

module.exports = issueModel;
