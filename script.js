const toggleMenu = document.querySelector(".toggle"); //btn
const other = document.querySelector(".other"); //btn
const megaMenu = document.querySelector(".mega-menu"); //menu

toggleMenu.addEventListener("click", function () {
    megaMenu.classList.toggle("open");
});

other.addEventListener("click", function () {
    megaMenu.classList.toggle("open");
});

document.addEventListener("click", function (event) {
    if (!toggleMenu.contains(event.target) && !other.contains(event.target)) {
        megaMenu.classList.remove("open");
    }
});
