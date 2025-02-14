import axios from "axios";
const url = "http://localhost:3001/";


//3001 because back end runs on 3001, front end runs on 3000

export class ApiClient {
  constructor(tokenProvider, logoutHandler) {
    this.tokenProvider = tokenProvider;
    this.logoutHandler = logoutHandler;
  }

  async authenticatedCall(method, endpoint, data) {
    console.log(`${url}${endpoint}`)
    return axios({
        method,
        url: `${url}${endpoint}`,
        withCredentials: true,  // This is crucial
        headers: {
            "Accept": "application/json",
        },
        data,
    }).catch((error) => {
        if (error.response?.status === 403) {
            return Promise.reject();
        } else {
            throw error;
        }
    });
}

  getWritings() {
    return this.authenticatedCall("get", `${url}currentuser`)
  }


  async createUser(data) {
    
    return await this.authenticatedCall("post", `${url}/users/create`, {
      username: data.username,
      password: data.password,
    });
  }


//   deletePlant(id) {
//     return this.authenticatedCall("delete", `${url}${id}`);
//   }

async login(username, password) {
  return await axios({
      method: "post",
      url: `${url}auth`,
      withCredentials: true,  // Add this line
      data: { username, password }
  });
}

// async getWritings() {
//   const data = await this.authenticatedCall("get", `writings`, {})
//   return data
// }

async getWritingPrompts() {
  const data = await this.authenticatedCall("get", `writingPrompts`, {})
  return data
}

async getRandomWritingPrompt() {
  const data = await this.authenticatedCall("get", `writingPrompts/random`, {})
  return data
}

}