var mongooose = require("mongoose");

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: process.env.DATABASE_NAME,
    };
    await mongooose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Connected Sucessfully");
  } catch (error) {}
};

module.exports = connectDB;
