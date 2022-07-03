import axios from "axios";
class issueApi {
  static getAllIssue(data) {
    console.log("getting the data from issueApi", { userEmail: data });
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
}

export default issueApi;
