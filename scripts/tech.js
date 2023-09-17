let imageBox;
let techImg;
let techName = document.querySelector("#techName");
let techDesc = document.querySelector("#techDesc");
let content = document.querySelector(".content")

let techSelectorGroup = document.querySelector("#techSelectorGroup")

getTechies();
//"./assets/technology/image-launch-vehicle-landscape.jpg"
async function getTechies() {
    let response = await fetch("./data.json");
    let data = (await response.json()).technology;
    createInfoHolders(data);

}

function selectTech(array) {
    techies = document.querySelectorAll(".tech");
    techies.forEach(techie => {
        techie.addEventListener("click", () => {
            if (!techie.classList.contains("active")) {
                let cur = document.querySelector(".tech.active");
                cur.classList.remove("active");
                techie.classList.add("active");
            }
            let techieIndex = techie.dataset.index
            let curActive = document.querySelector(`.techImageBox[data-status="active"]`);
            let newActive = document.querySelector(`.techImageBox[data-index="${techieIndex}"]`)
            curActive.dataset.status = "pending";
            newActive.dataset.status = "active";
            techName.innerHTML = array[techieIndex].name.toUpperCase();
            techDesc.innerHTML = array[techieIndex].description;
        })
    })
}

function createInfoHolders(array) {
    // Create tech selector for each tech in JSON file
    for (let i = 0; i < array.length; i++) {
        let techie = document.createElement("div");
        techie.classList.add("tech", "w-10", "aspect-square", "rounded-full", "border", "border-white", "grid", "place-items-center", "cursor-pointer", "sm:w-16");
        if (i == 0)
            techie.classList.add("active");
        techie.dataset.index = i;
        techie.innerHTML = i + 1;
        techSelectorGroup.appendChild(techie);
    }
    let techies = document.querySelectorAll(".tech");

    // Create tech image for each tech in JSON file
    techies.forEach(techie => {
        imageBox = document.createElement("div");
        imageBox.classList.add("techImageBox", "absolute", "w-full", "mb-6", "sm:mb-10", "lg:w-1/4", "lg:absolute", "lg:right-0", "lg:top-1/2", "lg:-translate-y-1/2");
        imageBox.dataset.index = techie.dataset.index;
        imageBox.dataset.status = "pending";
        techImg = document.createElement("img");
        techImg.src = array[+techie.dataset.index].images.png;
        techImg.classList.add("techImg", "w-full");
        if (imageBox.dataset.index == 0) {
            imageBox.dataset.status = "active";
        }
        if (window.matchMedia("(min-width: 1024px)").matches) {
            techImg.src = array[imageBox.dataset.index].images.portrait;
        } else {
            techImg.src = array[imageBox.dataset.index].images.landscape;
        }
        imageBox.appendChild(techImg);
        content.prepend(imageBox);
    })
    techName.innerHTML = array[0].name.toUpperCase();
    techDesc.innerHTML = array[0].description;
    selectTech(array);
}
