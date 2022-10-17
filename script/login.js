
let getDataUsers = async () => {
    let response = await fetch(
        "https://634cf79bf5d2cc648e989cbc.mockapi.io/Ajarin/users"
    );
    let users = await response.json();
    console.log(users)
    
    users.forEach(element => {
        console.log(element);
    });

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

// function validation() {
//     fetch("https://634cf79bf5d2cc648e989cbc.mockapi.io/Ajarin/users")
//     .then((response) => response.json())
//     .then((users) => { 
//         console.log(users)
//     })
// }