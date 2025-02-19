import axios from "axios";
const url = "http://localhost:3001/";


//3001 because back end runs on 3001, front end runs on 3000

export class ApiClient {
  constructor(tokenProvider, logoutHandler) {
    this.tokenProvider = tokenProvider;
    this.logoutHandler = logoutHandler;
  }

  // async authenticatedCall(method, endpoint, data) {
  //   console.log(`${url}${endpoint}`);
  //   return axios({
  //     method,
  //     url: `${url}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`,  // Adjusted this line to account for if url ends with / or not.
  //     withCredentials: true,  // This is crucial
  //     headers: {
  //       "Accept": "application/json",
  //     },
  //     data,
  //   }).catch((error) => {
  //     if (error.response?.status === 403) {
  //       return Promise.reject();
  //     } else {
  //       throw error;
  //     }
  //   });
  // }
  

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



  async createUser(data) {
    
    return await this.authenticatedCall("post", `${url}/users/create`, {
      username: data.username,
      password: data.password,
    });
  }


// async login(username, password) {
//   return await axios({
//       method: "post",
//       url: `${url}auth`,
//       withCredentials: true,  // Add this line
//       data: { username, password }
//   });
// }

async login(username, password) {
  try {
    const response = await axios({
      method: "post",
      url: `${url}auth`,
      withCredentials: true,
      data: { username, password },
    });

   
    // Store token and user ID in localStorage
    localStorage.setItem("authToken", response.data.token);
    localStorage.setItem("userId", response.data.user.id); // Assuming the backend includes a `user` object with an `id`

    return response.data; // Return the response for further handling if needed
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
}

async getWritings() {
  const data = await this.authenticatedCall("get", `writings`, {})
  return data
}

async getWritingPrompts() {
  const data = await this.authenticatedCall("get", `writingPrompts`, {})
  return data
}

async getRandomWritingPrompt() {
  const data = await this.authenticatedCall("get", `writingPrompts/random`, {})
  return data
}

async addWriting(data) {
  return await this.authenticatedCall("post", `writings/add`, {
    // title: data.title,
    words: data.words,
    writingPrompt: data.writingPrompt,
    // date: data.newdate(),
    // writtenBy: data.username,
  });
}

// //function to get user writings for display on user dashboard
// async getUserWritings(user_Id) {
//   const data = await this.authenticatedCall("get", `/users/${user_Id}/writings`, {});
//   return data;
// }

  // Function to get user writings for display on user dashboard
  async getUserWritings() {
  
    const userId = localStorage.getItem("userId"); // Retrieve user ID from localStorage

    console.log("get user items", userId)
    if (!userId) {
      throw new Error("User ID is missing! Please ensure you are logged in.");
    }

    const data = await this.authenticatedCall("get", `users/${userId}/writings`, {});
    return data;
  }
}

