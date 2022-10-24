// Toggle hamburger button untuk versi responsif
const navToggle = () => {
    var nav1 = document.getElementById("nav-menu");
    var nav2 = document.getElementById("nav-right");
    var hamburger = document.getElementById("hamburger");

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

// Mengatur link pada navbar berdasarkan login atau tidaknya user
function isLogin() {
    let cek = null
    let user = localStorage.getItem('user_login')
    let namaUser = JSON.parse(localStorage.getItem("user_login")).namaLengkap.split(" ")[0];
  
    if (user != cek) {
        let profile = document.getElementById('nav-right')
        profile.innerHTML = `
        <img src="../src/coolicon.svg" alt="" class="profile">
        <p class="nama-user">Halo ${namaUser}</p>
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