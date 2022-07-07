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

  static loginUser({ password, eMail, cat }) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await userModel.findOne({ eMail: eMail });
        if (response) {
          const { fName } = response;
          const catCheck = cat === response.cat ? true : false;
          console.log(
            `cat getting the value ${cat} and from database ${response} and comparing ${catCheck}`
          );
          const unHashPassword = await bcrypt.compare(
            password,
            response.password
          );
          unHashPassword && catCheck
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
                    cat,
                    fName,
                    status: "Login Sucessfully!",
                  });
                }
              )
            : resolve({ status: "Wronge Password!" });
        } else {
          console.log("Something Wrong");
          resolve({ status: "Something Wrong!" });
        }
      } catch (error) {
        //send the toster with sutible error
        reject(error);
        console.log(error);
      }
    });
  }

  static profileUser({ eMail }) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await userModel.findOne({ eMail: eMail });
        console.log(response);
        resolve(response);
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
