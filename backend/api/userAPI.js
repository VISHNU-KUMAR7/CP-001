var userModel = require("../schema/userSchema.js");
var issuesModel = require("../schema/issueSchema.js"); //for count issue
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

  static totalIssueByUser({ eMail }) {
    console.log("from backedn api", eMail);
    return new Promise(async (resolve, reject) => {
      try {
        const totIssues = await issuesModel.find({ eMail: eMail }).count();
        const totIssuesInp = await issuesModel
          .find({ eMail: eMail, status: "inprogress" })
          .count();
        const totIssuesClose = await issuesModel
          .find({ eMail: eMail, status: "close" })
          .count();
        const totIssuesOpen = await issuesModel
          .find({ eMail: eMail, status: "open" })
          .count();
        const totIssuesCri = await issuesModel
          .find({ eMail: eMail, severity: "critical" })
          .count();
        const totIssuesMinor = await issuesModel
          .find({ eMail: eMail, severity: "minor" })
          .count();
        const totIssuesMajor = await issuesModel
          .find({ eMail: eMail, severity: "major" })
          .count();
        const data = {
          totIssues,
          totIssuesInp,
          totIssuesClose,
          totIssuesOpen,
          totIssuesCri,
          totIssuesMinor,
          totIssuesMajor,
        };
        console.log(data);
        resolve(data);
      } catch (e) {
        resolve(e);
      }
    });
  }

  static totalIssueByAdmin() {
    return new Promise(async (resolve, reject) => {
      try {
        const totIssues = await issuesModel.find().count();
        const totIssuesInp = await issuesModel
          .find({ status: "inprogress" })
          .count();
        const totIssuesClose = await issuesModel
          .find({ status: "close" })
          .count();
        const totIssuesOpen = await issuesModel
          .find({ status: "open" })
          .count();
        const totIssuesCri = await issuesModel
          .find({ severity: "critical" })
          .count();
        const totIssuesMinor = await issuesModel
          .find({ severity: "minor" })
          .count();
        const totIssuesMajor = await issuesModel
          .find({ severity: "major" })
          .count();
        const data = {
          totIssues,
          totIssuesInp,
          totIssuesClose,
          totIssuesOpen,
          totIssuesCri,
          totIssuesMinor,
          totIssuesMajor,
        };
        resolve(data);
      } catch (e) {
        resolve(e);
      }
    });
  }
}

module.exports = userAPI;
