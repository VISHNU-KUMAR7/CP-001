import axios from "axios";

class userApi {
  static getAllUser(data) {
    console.log(data);
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(
          "http://localhost:3001/users/loginUser",
          data
        );
        console.log("response from userAPI:", response);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  }
}

export default userApi;
