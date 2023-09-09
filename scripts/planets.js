let planets = document.querySelectorAll(".planet");
let destImg = document.querySelector("#destImg");
let destTitle = document.querySelector("#destTitle");
let destDesc = document.querySelector("#destDesc");
let destDist = document.querySelector("#destDist");
let destTime = document.querySelector("#destTime");

getPlanets();

async function getPlanets() {
    let response = await fetch("../data/data.json");
    let data = (await response.json()).destinations;
    console.log(data);
    displayDestInfo(data);
}
function displayDestInfo(array) {
    planets.forEach(planet => {
        planet.addEventListener("click", () => {
            if (!planet.classList.contains("active")) {
                let cur = document.querySelector(".planet.active");
                cur.classList.remove("active");
                planet.classList.add("active");
            }
            let planetIndex = planet.dataset.index
            destImg.src = array[planetIndex].images.png;
            destTitle.innerHTML = array[planetIndex].name.toUpperCase();
            destDesc.innerHTML = array[planetIndex].description;
            destDist.innerHTML = array[planetIndex].distance.toUpperCase();
            destTime.innerHTML = array[planetIndex].travel.toUpperCase();
        })
    })
}