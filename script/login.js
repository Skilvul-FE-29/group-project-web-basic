let users = []

// Mengambil data user dari API
let getDataUsers = async function () {
    let response = await fetch(
        "https://634ce2e2f5d2cc648e96b729.mockapi.io/user"
    );
    users = await response.json();
};
getDataUsers();

let email = document.getElementById('user_email');
let password = document.getElementById('user_password');
let text = document.getElementById('err-mess')

// Memvalidasi apakah data input sudah ada di API
function validation() {

    if (email.value != "" && password.value != "") {
        users.forEach(element => {
            if ((email.value == element.email) && (password.value == element.password)) {
                localStorage.setItem('user_login', JSON.stringify(element))
                window.location.href = '../index.html';
            }
            else if (email.value != element.email) {
                text.innerHTML = `<p> Email salah </p>`
            }
            else if (password.value != element.password) {
                text.innerHTML = `<p> Password salah </p>`
            }
        });
    }  else {
            alert('Belum memiliki akun? Silahkan registrasi');
            window.location.href = '../pages/register.html';
        }
}

document.getElementById('btn-login').addEventListener('click', (ev) => {
    ev.preventDefault()
    validation()

})

