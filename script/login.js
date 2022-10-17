
let getDataUsers = async function () {
    let response = await fetch(
        "https://634cf79bf5d2cc648e989cbc.mockapi.io/Ajarin/users"
    );
    let users = await response.json();
    // console.log(users)

    // let user_email = document.getElementById('user_email').value;
    // let user_password = document.getElementById('user_password').value;

    // if (user_email != "" && user_password != "") {
    //     console.log(user_email);
    //     console.log(user_password);
    //     // users.forEach(element => {
    //     //     console.log(element);
    //     //     if (user_email == users.user_email && user_password == users.user_password)  {
    //     //         return alert('Selamat anda berhasil login');
    //     //     } else{
    //     //     alert('Anda harus mengisi data dengan lengkap !');
    //     //     }
    //     // });
    // } else {
    //     alert('Anda harus mengisi data dengan lengkap !');
    // }
    // users.forEach(element => {
    //     console.log(element);


    //     // if (user_email == users.user_email && user_password == users.user_password)  {
    //     //     return alert('Selamat anda berhasil login');
    //     // } else{
    //     // alert('Anda harus mengisi data dengan lengkap !');
    //     // }
    // });

    // for (let i = 0; i < users.length; i++) {
    //     console.log(i);
    // }

    // let user_email = document.getElementById('user_email').value;
    // let user_password = document.getElementById('user_password').value;
    
    // if (user_email == users.user_email && user_password == users.user_password)  {
    //     return alert('Selamat anda berhasil login');
    // }else{
    //     alert('Anda harus mengisi data dengan lengkap !');
    // }
};
getDataUsers();

let user_email = document.getElementById('user_email');
let user_password = document.getElementById('user_password');

function validation() {

    if (user_email.value != "" && user_password.value != "") {
        // console.log(user_email.value);
        // console.log(user_password.value);
        // users.forEach(element => {
        //     console.log(element);
        //     if (user_email == users.user_email && user_password == users.user_password)  {
        //         return alert('Selamat anda berhasil login');
        //     } else{
        //     alert('Anda harus mengisi data dengan lengkap !');
        //     }
        // });
    }  else{
            alert('Anda harus mengisi data dengan lengkap !');
        }
}

document.getElementById('submit').addEventListener('click', (ev) => {
    ev.preventDefault()
    validation()

})


// function validation() {
//     fetch("https://634cf79bf5d2cc648e989cbc.mockapi.io/Ajarin/users")
//     .then((response) => response.json())
//     .then((users) => { 
//         console.log(users)
//     })
// }