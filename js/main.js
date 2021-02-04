const menuButton = document.querySelector('#menu_button');
const navMenu = document.querySelector('.header__navigation');
const menuClose = document.querySelector('.header__navigation_close');
const itemImg = document.querySelectorAll('.featured__item');
navMenu.style.display = "none";

itemImg.forEach(item => {
    item.addEventListener("mouseover", function (evt) {
        let el_btn = this.childNodes[1].lastElementChild;
        let el_ovr = this.childNodes[1].childNodes[3];
        //        console.log(el2);
        el_btn.style.display = "flex";
        el_ovr.style.display = "block"
    });
    item.addEventListener("mouseout", function (evt) {
        let el_btn = this.childNodes[1].lastElementChild;
        let el_ovr = this.childNodes[1].childNodes[3];
        //        console.log(el2);
        el_btn.style.display = "none";
        el_ovr.style.display = "none"
    });
});

menuButton.addEventListener("click", function () {
    if (navMenu.style.display == "none")
        navMenu.style.display = "block";
    else
        navMenu.style.display = "none";
});

menuClose.addEventListener("click", function () {
    navMenu.style.display = "none";
})