const menuButton = document.querySelector('#menu_button');
const navMenu = document.querySelector('.header__navigation');
const menuClose = document.querySelector('.header__navigation_close');
navMenu.style.display = "none";

menuButton.addEventListener("click", function () {
    if (navMenu.style.display == "none")
        navMenu.style.display = "block";
    else
        navMenu.style.display = "none";
});

menuClose.addEventListener("click", function () {
    navMenu.style.display = "none";
})