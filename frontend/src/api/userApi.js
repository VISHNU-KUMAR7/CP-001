import axios from "axios";

class userApi {
  static getAllUser(data) {
    console.log("2 values from API", data);

    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(
          "http://localhost:3001/users/loginUser",
          data
        );
        resolve(response.data);
      } catch (e) {
        reject(e);
      }
    });
  }

  static totalIssueByUser(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(
          "http://localhost:3001/users/totalIssueByUser",
          data
        );
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  }

  static newUser(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(
          "http://localhost:3001/users/registerUser",
          data
        );
        resolve(response.data);
      } catch (e) {
        reject(e);
      }
    });
  }

  static profileUser(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(
          "http://localhost:3001/users/profileUser",
          data
        );
        resolve(response.data);
      } catch (e) {
        reject(e);
      }
    });
  }
}

export default userApi;
