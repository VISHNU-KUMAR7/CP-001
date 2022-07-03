var issuesModel = require("../schema/issueSchema.js");

class issueAPI {
  static getIssueByUser({ eMail, skip, limit }) {
    console.log({ eMail, skip, limit })
    return new Promise(async (resolve, reject) => {
      try {
        const response = await issuesModel
          .find({ eMail: eMail })
          .skip(skip)
          .limit(limit);
        resolve(response);
      } catch (error) {
        console(error);
        reject(error);
      }
    });
  }
  static getAllIssues({ eMail, skip, limit }) {
    return new Promise(async (resolve, reject) => {
      try {
        //call model and perform operation
        const response = await issuesModel.find({
          eMail: eMail,
        });
        resolve(response);
      } catch (error) {
        //send the toster with sutible error
        reject(error);
        console.log(error);
      }
    });
  }

  static getIssueById({ eMail, id }) {
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

  static getIssuesBySearch({ eMail, searchItem, skip, limit }) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log("Getteing the data for search", {
          userEmail: eMail,
          searchItem,
          skip,
          limit,
        });
        const response = await issuesModel
          .find({
            eMail: eMail,
            $or: [
              { description: { $regex: searchItem, $options: "i" } },
              { status: { $regex: searchItem, $options: "i" } },
            ],
          })
          .skip(skip)
          .limit(limit);
        console.log("Getting response", response);
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  }

  static addIssue(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await issuesModel.insertMany(data);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });
  }

  static updateIssue({ eMail, id, data }) {
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

  static deleteIssue({ eMail, id }) {
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

  static multipleDeleteIssue({ eMail, ids }) {
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
