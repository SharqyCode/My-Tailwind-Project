let burgerIcon = document.querySelector("#burger");
let menu = document.querySelector("#menu")

burgerIcon.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    if (menu.classList.contains("hidden"))
        burgerIcon.src = "./assets/shared/icon-hamburger.svg";
    else
        burgerIcon.src = "./assets/shared/icon-close.svg";
})