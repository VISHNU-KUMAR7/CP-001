import axios from "axios";

class userApi {
  static getAllUser(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(
          "http://localhost:3001/users/loginUser",
          data
        );
        console.log("response from userAPI:", response.data);
        resolve(response.data);
      } catch (e) {
        reject(e);
      }
    });
  }
}

export default userApi;
