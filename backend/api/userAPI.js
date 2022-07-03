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
            resolve({
              ...response._doc,
              token: token,
              eMail: detail.eMail,
              status: "User Registered!",
            });
          }
        );
      } catch (error) {
        //send the toster with sutible error
        resolve({ ...error, status: "User Not Register!" });
        console.log(error);
      }
    });
  }

  static loginUser({ password, eMail }) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await userModel.findOne({ eMail: eMail });
        // console.log(eMail);
        if (response) {
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
                  resolve({
                    unHashPassword,
                    token,
                    eMail,
                    status: "Login Sucessfully!",
                  });
                }
              )
            : resolve({ status: "Wronge Password!" });
        } else {
          console.log("Wronge Email");
          resolve({ status: "Wronge Email!" });
        }
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
