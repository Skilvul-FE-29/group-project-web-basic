let users = [];
let btnLogin = document.getElementById("btn-login");

let getDataUsers = async function () {
  let response = await fetch(
    "https://634ce2e2f5d2cc648e96b729.mockapi.io/user"
  );
  users = await response.json();
  console.log(users);
};
getDataUsers();

let email = document.getElementById("user_email");
let password = document.getElementById("user_password");
let text = document.getElementById("err-mess");

function validation() {
  if (email.value != "" && password.value != "") {
    users.forEach((element) => {
      if (email.value == element.email && password.value == element.password) {
        localStorage.setItem("user_login", JSON.stringify(element));
        window.location.href = "../index.html";
      } else if (email.value != element.email) {
        text.innerHTML = `<p> Email salah </p>`;
      } else if (password.value != element.password) {
        text.innerHTML = `<p> Password salah </p>`;
      }
    });
  } else {
    alert("Belum memiliki akun? Silahkan registrasi");
    window.location.href = "../pages/register.html";
  }
}

btnLogin.addEventListener("click", (ev) => {
  ev.preventDefault();
  validation();
});

// let notUserLogin = document.getElementById("not__user-login");
// let loginUser = document.getElementById("user-login");
// let userName = document.getElementById("user-name");
// let linkHidden = document.querySelector(".link-hidden");

// function checkUserLogin() {
//   if (localStorage.getItem("user_login")) {
//     notUserLogin.style.display = "none";
//     loginUser.style.display = "block";
//     linkHidden.style.display = "block";
//     userName.innerHTML = JSON.parse(
//       localStorage.getItem("user_login")
//     ).namaLengkap;
//   } else {
//     notUserLogin.style.display = "block";
//     loginUser.style.display = "none";
//     linkHidden.style.display = "none";
//   }
// }

// checkUserLogin();
