let users = []

let getDataUsers = async function () {
    let response = await fetch(
        "https://634cf79bf5d2cc648e989cbc.mockapi.io/Ajarin/users"
    );
    users = await response.json();
    console.log(users);
};
getDataUsers();

let user_email = document.getElementById('user_email');
let user_password = document.getElementById('user_password');

function validation() {

    if (user_email.value != "" && user_password.value != "") {
        for(let i = 0; i<users.length; i++){
            if((user_email.value == users[i]["user_email"])&&(user_password.value == users[i]["user_password"])){
                console.log("OKE")
                console.log(users[i]);
                localStorage.setItem('user_login', JSON.stringify(users[i]))
                window.location.href = '../index.html';
                break

                // let landing_page = './index.html'
                // window.open(landing_page)
            } else {
                    alert('Anda harus mengisi data dengan benar !');
                    break
            }
        }
    }  else {
            alert('Anda harus mengisi data dengan lengkap !');
        }
}

document.getElementById('submit').addEventListener('click', (ev) => {
    ev.preventDefault()
    validation()

})

