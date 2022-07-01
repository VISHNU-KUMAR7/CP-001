var issuesModel = require("../schema/issueSchema.js");

class issueAPI {
  static getIssueByUser({ userEmail }) {
    return new Promise(async (resolve, reject) => {
      try {
        const response  = await issuesModel.find({userEmail:userEmail})
        resolve(response)
      } catch (error) {
        console(error);
        reject(error);
      }
    });
  }
  static getAllIssues({ userEmail, skip, limit }) {
    return new Promise(async (resolve, reject) => {
      try {
        //call model and perform operation
        const response = await issuesModel
          .find({
            userEmail: userEmail,
          })
          .skip(skip)
          .limit(limit);
        resolve(response);
      } catch (error) {
        //send the toster with sutible error
        reject(error);
        console.log(error);
      }
    });
  }

  static getIssueById({ userEmail, id }) {
    return new Promise(async (resolve, reject) => {
      try {
        //call model and perform operation
        const response = await issuesModel.findById(id);
        resolve(response);
      } catch (error) {
        //send the toster with sutible error
        reject(error);
        console.log(error);
      }
    });
  }

  static getIssuesBySearch({ userEmail, searchItem, skip, limit }) {
    return new Promise(async (resolve, reject) => {
      try {
        //call model and perform operation
        const response = await issuesModel
          .find({
            userEmail: userEmail,
            $or: [
              { description: { $regex: searchItem, $options: "i" } },
              { status: { $regex: searchItem, $options: "i" } },
            ],
          })
          .skip(skip)
          .limit(limit);
        resolve(response);
      } catch (error) {
        //send the toster with sutible error
        reject(error);
        console.log(error);
      }
    });
  }

  static addIssue(data) {
    return new Promise(async (resolve, reject) => {
      try {
        //call model and perform operation
        const response = await issuesModel.insertMany(data);
        resolve(response.data);
      } catch (error) {
        //send the toster with sutible error
        reject(error);
        console.log(error);
      }
    });
  }

  static updateIssue({ userEmail, id, data }) {
    return new Promise(async (resolve, reject) => {
      try {
        //call model and perform operation
        const response = await issuesModel.findByIdAndUpdate(id, data);
        resolve(response);
      } catch (error) {
        //send the toster with sutible error
        reject(error);
        console.log(error);
      }
    });
  }

  static deleteIssue({ userEmail, id }) {
    return new Promise(async (resolve, reject) => {
      try {
        //call model and perform operation
        const response = await issuesModel.findByIdAndDelete(id);
        resolve(response);
      } catch (error) {
        //send the toster with sutible error
        reject(error);
        console.log(error);
      }
    });
  }

  static multipleDeleteIssue({ userEmail, ids }) {
    return new Promise(async (resolve, reject) => {
      try {
        //call model and perform operation
        const response = await issuesModel.deleteMany({ _id: { $in: ids } });
        resolve(response);
      } catch (error) {
        //send the toster with sutible error
        reject(error);
        console.log(error);
      }
    });
  }
}

module.exports = issueAPI;


