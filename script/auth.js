// import users form login.js
import { users } from "./login.js";

let notUserLogin = document.getElementById("not__user-login");
let loginUser = document.getElementById("user-login");
let userName = document.getElementById("user-name");
let linkHidden = document.querySelector(".link-hidden");
console.log(linkHidden);

// jika login user berhasil login maka akan muncul nama user di navbar dan button login akan hilang

if (localStorage.getItem(users)) {
  let userLogin = users.find((user) => user.id == localStorage.getItem(users));
  notUserLogin.style.display = "none";
  loginUser.style.display = "block";
  linkHidden.style.display = "block";
  userName.innerHTML = userLogin.name;
} else {
  notUserLogin.style.display = "block";
  loginUser.style.display = "none";
  linkHidden.style.display = "none";
}
