import axios from "axios";
const url = "http://localhost:3001/";


//3001 because back end runs on 3001, front end runs on 3000

export class ApiClient {
  constructor(tokenProvider, logoutHandler) {
    this.tokenProvider = tokenProvider;
    this.logoutHandler = logoutHandler;
  }

  async authenticatedCall(method, url, data) {
    return axios({
      method,
      url,
      headers: {
        //grab the token from local storage and send it with the request
        authorization: this.tokenProvider(),
      },
      data,
    }).catch((error) => {
      if (error.response?.status === 403) {
       //clears the local storage
        this.logoutHandler();
        return Promise.reject();
      } else {
        throw error;
      }
    });
  }

  getPlants() {
    return this.authenticatedCall("get", `${url}currentuser`)
  }


  async addPlant(data) {
    
    return await this.authenticatedCall("post", `${url}create`, {
      name: data.name,
      watering: data.watering,
    });
  }


  deletePlant(id) {
    return this.authenticatedCall("delete", `${url}${id}`);
  }

  async login(username, password) {
    return await axios({
      method: "post",
      url: `${url}auth`,
      data: { username, password },
    });
}
}