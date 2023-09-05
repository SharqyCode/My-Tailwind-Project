let navlinks = document.querySelectorAll(".links a");

navlinks.forEach((link) => {
    link.addEventListener("click", () => {
        let activeLink = document.querySelector(".links a.active");
        activeLink.classList.remove("active");
        link.classList.add("active");
    })
})