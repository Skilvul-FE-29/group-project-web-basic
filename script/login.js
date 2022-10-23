let users = []

let getDataUsers = async function () {
    let response = await fetch(
        "https://634ce2e2f5d2cc648e96b729.mockapi.io/user"
    );
    users = await response.json();
    console.log(users);
};
getDataUsers();

let email = document.getElementById('user_email');
let password = document.getElementById('user_password');

function validation() {

    if (email.value != "" && password.value != "") {
        for(let i = 0; i<users.length; i++){
            if((email.value == users[i]["email"])){
                if ((password.value == users[i]["password"])) {
                    // console.log("OKE")
                    console.log(users[i]);
                    localStorage.setItem('user_login', JSON.stringify(users[i]))
                    window.location.href = '../index.html';
                    break
                }
                else {
                    alert('Password anda salah!')
                    break
                }
            } else {
                    alert('Username anda salah ');
                    break
            }
        }
    }  else {
            alert('Belum memiliki akun? Silahkan registrasi');
        }
}

document.getElementById('btn-login').addEventListener('click', (ev) => {
    ev.preventDefault()
    validation()

})

