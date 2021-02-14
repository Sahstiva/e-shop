const menuButton = document.querySelector('#menu_button');
const navMenu = document.querySelector('.header__navigation');
const menuClose = document.querySelector('.header__navigation_close');
const sectionOverlay = document.querySelector('.section__overlay');
navMenu.style.display = "none";

menuButton.addEventListener("click", function () {
    // navMenu.classList.toggle("nav_visible");
    if (navMenu.style.display == "none") {
        if (sectionOverlay)
            sectionOverlay.style.display = "block";
        navMenu.style.display = "block";
        navMenu.style.zIndex = "9999";
    }
    else {
        navMenu.style.display = "none";
        if (sectionOverlay)
            sectionOverlay.style.display = "none";
    }
});

menuClose.addEventListener("click", function () {
    if (sectionOverlay)
        sectionOverlay.style.display = "none";
    navMenu.style.display = "none";
})