// import users form login.js

import users from "./login.js";

let notUserLogin = document.getElementById("not__user-login");
let loginUser = document.getElementById("user-login");
let userName = document.getElementById("user-name");
let linkHidden = document.querySelector(".link-hidden");
//let userData = getDataUsers;

// jika login user berhasil login maka akan muncul namaLengkap user di navbar dan not__user-login akan hilang dan user-login akan muncul dan link-hidden akan muncul juga jika user belum login maka not__user-login akan muncul dan user-login akan hilang dan link-hidden akan hilang

function checkUserLogin() {
  if (localStorage.getItem("user_login")) {
    notUserLogin.style.display = "none";
    loginUser.style.display = "block";
    linkHidden.style.display = "block";
    userName.innerHTML = JSON.parse(
      localStorage.getItem("user_login")
    ).namaLengkap;
  } else {
    notUserLogin.style.display = "block";
    loginUser.style.display = "none";
    linkHidden.style.display = "none";
  }
}

checkUserLogin();
