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