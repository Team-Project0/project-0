import axios from "axios";

const API_URL = "http://localhost:3000/api";

class AuthService {
  login(e_mail, userName, password) {
    return axios
      .post(API_URL + "/login", {
        userName,
        password,
        e_mail,
      })
      .then((response) => {
        if (response.data.refreshToken) {
          localStorage.setItem(
            "authorization",
            JSON.stringify(response.data.refreshToken)
          );
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("authorization");
  }

  register(userName, password, firstName, lastName, profil_photo, role, e_mail) {
    return axios.post(`http://localhost:3000/api/signUp`, {

      userName,
      e_mail,
      password,
      firstName,
      lastName,

      profil_photo,
      role,
    }).then((res)=>{return res.data});

  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("authorization"));
  }
}

export default new AuthService();
