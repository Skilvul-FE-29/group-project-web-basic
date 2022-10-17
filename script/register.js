let postDataUsers = async () => {
  let fullName = document.getElementById("name");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirmPassword");
  let education = document.getElementById("education");
  let address = document.getElementById("address");
  let school = document.getElementById("school");

  let data = {
    fullName: fullName.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
    education: education.value,
    address: address.value,
    school: school.value,
  };

  data = JSON.stringify(data);

  let response = await fetch(
    "https://634ce2e2f5d2cc648e96b729.mockapi.io/user"
  );

  let users = await response.json();
  console.log(users);
};

postDataUsers();

// let fullName = document.getElementById("name");
// let email = document.getElementById("email");
// let password = document.getElementById("password");
// let confirmPassword = document.getElementById("confirmPassword");
// let education = document.getElementById("education");
// let address = document.getElementById("address");
// let school = document.getElementById("school");

// const registerBtn = document.getElementById("btn-submit");

// const BASE_API = "https://634ce2e2f5d2cc648e96b729.mockapi.io/user";

// registerBtn.addEventListener("click", function () {
//   const user = {
//     name: fullName.value,
//     email: email.value,
//     password: password.value,
//     confirmPassword: confirmPassword.value,
//     education: education.value,
//     address: address.value,
//     school: school.value,
//   };

//   fetch(BASE_API, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// });
