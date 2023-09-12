let planets = document.querySelectorAll(".planet");
// let destImg = document.querySelector("#destImg");
let imageBox = document.querySelector(".imageBox");
let curDestImg = document.querySelector("#curDestImg");
let prevDestImg = document.querySelector("#prevDestImg");
let nextDestImg = document.querySelector("#nextDestImg");
let destTitle = document.querySelector("#destTitle");
let destDesc = document.querySelector("#destDesc");
let destDist = document.querySelector("#destDist");
let destTime = document.querySelector("#destTime");


function displayDestInfo(array) {
    planets.forEach(planet => {
        planet.addEventListener("click", () => {
            if (!planet.classList.contains("active")) {
                let cur = document.querySelector(".planet.active");
                cur.classList.remove("active");
                planet.classList.add("active");
            }
            let curActive = document.querySelector(`.planetImg[data-status="active"]`);
            let curIndex = curActive.dataset.index;
            let newActive = document.querySelector(`.planetImg[data-index="${planet.dataset.index}"]`)
            if (curIndex != planet.dataset.index) {
                if (planet.dataset.index > curIndex) {
                    newActive.dataset.status = "nextRight";
                    curActive.dataset.status = "nextLeft";
                }
                else if (planet.dataset.index < curIndex) {
                    newActive.dataset.status = "nextLeft";
                    curActive.dataset.status = "nextRight";
                }
                setTimeout(() => {
                    newActive.dataset.status = "active";
                    curActive.dataset.status = "pending";
                    curIndex = planet.dataset.index;
                    console.log(curActive);
                    console.log(newActive);
                    console.log(curIndex);
                }, 400);
            }
            let planetIndex = planet.dataset.index;
            destTitle.innerHTML = array[planetIndex].name.toUpperCase();
            destDesc.innerHTML = array[planetIndex].description;
            destDist.innerHTML = array[planetIndex].distance.toUpperCase();
            destTime.innerHTML = array[planetIndex].travel.toUpperCase();
        })
    })
}

async function getPlanets() {
    let response = await fetch("./data.json");
    let data = (await response.json()).destinations;
    console.log(data);
    planets.forEach(planet => {
        let planetImg = document.createElement("img");
        planetImg.dataset.index = planet.dataset.index;
        planetImg.dataset.status = "pending";
        planetImg.src = data[+planetImg.dataset.index].images.png;
        planetImg.classList.add("w-destSm", "lg:w-destLg", "planetImg", "sm:w-destMd", "lg:w-destLg", "duration-300", "absolute");
        if (planetImg.dataset.index == 0) {
            planetImg.dataset.status = "active";
        }
        imageBox.appendChild(planetImg);
    })
    displayDestInfo(data);
}

getPlanets();
