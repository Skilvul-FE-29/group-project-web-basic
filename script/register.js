let fullName = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let education = document.getElementById("education");
let address = document.getElementById("address");
let school = document.getElementById("school");
let btnSubmit = document.getElementById("btn-submit");
//let user;

const API_URL = "https://634ce2e2f5d2cc648e96b729.mockapi.io/user";

const validate = () => {
  if (
    fullName.value == "" ||
    email.value == "" ||
    password.value == "" ||
    confirmPassword.value == "" ||
    education == "" ||
    address == "" ||
    school == ""
  ) {
    alert("Data tidak valid");
  } else {
    if (password.value == confirmPassword.value) {
      postTeacher(API_URL, getInput());
      alert("Registrasi berhasil");
      window.location.href = "../pages/login.html";
    } else {
      alert("Konfirmasi password berbeda");
    }
  }
};

const getInput = () => {
  let user = {
    namaLengkap: fullName.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
    jenjangPendidikan: education.value,
    alamat: address.value,
    asalSekolah: school.value,
    id: "",
  };

  return user;
};

btnSubmit.addEventListener("click", (ev) => {
  ev.preventDefault();
  validate();
});

function postTeacher(url, input) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(input),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
}
