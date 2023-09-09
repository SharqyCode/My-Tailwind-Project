let techies = document.querySelectorAll(".tech");
let techImg = document.querySelector("#techImg");
let techName = document.querySelector("#techName");
let techDesc = document.querySelector("#techDesc");

getTechies();
//"./assets/technology/image-launch-vehicle-landscape.jpg"
async function getTechies() {
    let response = await fetch("../data.json");
    let data = (await response.json()).technology;
    console.log(data);
    if (window.matchMedia("(min-width: 1024px)").matches) {
        techImg.src = data[0].images.portrait;
    } else {
        techImg.src = data[0].images.landscape;
    }
    displayTechInfo(data);

    function displayTechInfo(array) {
        techies.forEach(techie => {
            techie.addEventListener("click", () => {
                if (!techie.classList.contains("active")) {
                    let cur = document.querySelector(".tech.active");
                    cur.classList.remove("active");
                    techie.classList.add("active");
                }
                let techieIndex = techie.dataset.index
                if (window.matchMedia("(min-width: 1024px)").matches) {
                    techImg.src = array[techieIndex].images.portrait;
                } else {
                    techImg.src = array[techieIndex].images.landscape;
                }

                techName.innerHTML = array[techieIndex].name.toUpperCase();
                techDesc.innerHTML = array[techieIndex].description;
            })
        })
    }
}
