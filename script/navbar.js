const navToggle = () => {
    var nav1 = document.getElementById("nav-menu");
    var nav2 = document.getElementById("nav-right");
    var hamburger = document.getElementById("hamburger");
    // nav1.classList.add("active");
    // nav2.classList.add("active");

    if (nav1.className === "" && nav2.className === "" && hamburger.className === "") {
        nav1.classList.add("active");
        nav2.classList.add("active");
        hamburger.classList.add("active");
        
      } else {
        nav1.classList.remove("active");
        nav2.classList.remove("active");
        hamburger.classList.remove("active");
    }
}

function isLogin() {
    let cek = null
    let user = localStorage.getItem('user_login')
    console.log(user)
  
    if (user != cek) {
        let profile = document.getElementById('nav-right')
        profile.innerHTML = `
        <img src="../src/coolicon.svg" alt="" class="profile">
        `
  
        document.getElementById("halaman-home").addEventListener("click", (ev) => {
            ev.preventDefault();
            window.location.href = '../';
            console.log("hai")
        });
    
        document.getElementById("halaman-pesan").addEventListener("click", (ev) => {
            ev.preventDefault();
            window.location.href = '../pages/teacher.html';
        });
    
        document.getElementById("halaman-daftar-sesi").addEventListener("click", (ev) => {
            ev.preventDefault();
            window.location.href = '../pages/daftar-sesi.html';
        });

    } 
}

isLogin()