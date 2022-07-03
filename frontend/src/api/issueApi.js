import axios from "axios";
class issueApi {
  static getAllIssue(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(
          "http://localhost:3001/issues/getIssueByUser",
          { userEmail: data }
        );
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  }

  static getIssueBySearch(data) {
    console.log("getting the data from issueApi", data);
    return new Promise(async (resolve, reject) => {
      try {
        // eMail, searchItem, skip, limit
        const response = await axios.post(
          "http://localhost:3001/issues/getIssuesBySearch",
          { ...data }
        );
        console.log(response)
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  }
}

export default issueApi;
