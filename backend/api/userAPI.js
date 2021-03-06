var userModel = require("../schema/userSchema.js");
var bcrypt = require("bcrypt");
const SALT_ROUND = parseInt(process.env.SALT_ROUND);
var jwt = require("jsonwebtoken");

class userAPI {
  static registerUser(detail) {
    return new Promise(async (resolve, reject) => {
      try {
        const hashPassword = await bcrypt.hash(detail.password, SALT_ROUND);
        const response = new userModel({
          ...detail,
          password: hashPassword,
        });
        response.save();
        jwt.sign(
          { response },
          process.env.JWT_KEY,
          {
            expiresIn: "100s",
          },
          (e, token) => {
            resolve({ ...response._doc, token: token });
          }
        );
      } catch (error) {
        //send the toster with sutible error
        reject(error);
        console.log(error);
      }
    });
  }

  static loginUser({ password, eMail }) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await userModel.findOne({ eMail: eMail });
        const unHashPassword = await bcrypt.compare(
          password,
          response.password
        );
        unHashPassword
          ? jwt.sign(
              { response },
              process.env.JWT_KEY,
              {
                expiresIn: "100s",
              },
              (e, token) => {
                resolve({ unHashPassword, token });
              }
            )
          : "";

        // const response = userModel.insert();
        // resolve(response);
        //call model and perform operation
      } catch (error) {
        //send the toster with sutible error
        reject(error);
        console.log(error);
      }
    });
  }

  static getIssueByUser() {
    return new Promise(async (resolve, reject) => {
      try {
        const SALT_ROUND = process.env.SALT_ROUND;
        const unHashPassword = await bcrypt.compare("password", SALT_ROUND);
        //call model and perform operation
      } catch (error) {
        //send the toster with sutible error
        console.log(error);
      }
    });
  }
}

module.exports = userAPI;
