const toggleMenu = document.querySelector(".toggle");//btn
const megaMenu = document.querySelector(".mega-menu");//menu

toggleMenu.addEventListener("click", function () {
    megaMenu.classList.add("open");
});

document.addEventListener("click", function (event) {
    if (!megaMenu.contains(event.target) && !toggleMenu.contains(event.target)) {
        megaMenu.classList.remove("open");
    }
});