
let getDataUsers = async function () {
    let response = await fetch(
        "https://634cf79bf5d2cc648e989cbc.mockapi.io/Ajarin/users"
    );
    let users = await response.json();
};
getDataUsers();

let user_email = document.getElementById('user_email');
let user_password = document.getElementById('user_password');

function validation() {

    if (user_email.value != "" && user_password.value != "") {
        for(let i = 0; i<user.length; i++){
            if((user_email.value == user[i]["user_email"])&&(user_password.value == user[i]["user_password"])){
                console.log("OKE")
                // window.location.href = './index.html';
                // let landing_page = './index.html'
                // window.open(landing_page)
            }
        }
    }  else {
            alert('Anda harus mengisi data dengan lengkap !');
        }
}

document.getElementById('btn-login').addEventListener('click', (ev) => {
    ev.preventDefault()
    validation()

})

