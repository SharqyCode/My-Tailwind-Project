let imageBox;
let crewImg;
let content = document.querySelector(".content");
let crewRole = document.querySelector("#crewRole");
let crewName = document.querySelector("#crewName");
let crewDesc = document.querySelector("#crewDesc");

let crewSelectorGroup = document.querySelector("#crewSelectorGroup");

getMembers();

async function getMembers() {
    let response = await fetch("./data.json");
    let data = (await response.json()).crew;
    createInfoHolders(data)
}

function selectCrewMem(array) {
    members = document.querySelectorAll(".crewMem");
    members.forEach(member => {
        member.addEventListener("click", () => {
            if (!member.classList.contains("active")) {
                let cur = document.querySelector(".crewMem.active");
                cur.classList.remove("active");
                member.classList.add("active");
            }
            let curActive = document.querySelector(`.crewImageBox[data-status="active"]`);
            let curIndex = curActive.dataset.index;
            let newActive = document.querySelector(`.crewImageBox[data-index="${member.dataset.index}"]`)
            if (curIndex != member.dataset.index) {
                if (member.dataset.index > curIndex) {
                    newActive.dataset.status = "nextRight";
                    curActive.dataset.status = "nextLeft";
                }
                else if (member.dataset.index < curIndex) {
                    newActive.dataset.status = "nextLeft";
                    curActive.dataset.status = "nextRight";
                }
                setTimeout(() => {
                    newActive.dataset.status = "active";
                    curActive.dataset.status = "pending";
                    curIndex = member.dataset.index;
                }, 300);
            }
            let memberIndex = member.dataset.index
            crewName.innerHTML = array[memberIndex].name.toUpperCase();
            crewRole.innerHTML = array[memberIndex].role.toUpperCase();
            crewDesc.innerHTML = array[memberIndex].bio;
        })
    })
}

function createInfoHolders(array) {
    // Create crewMem selector for each crewMem in JSON file
    for (let i = 0; i < array.length; i++) {
        let crewMem = document.createElement("div");
        crewMem.classList.add("crewMem", "w-3", "aspect-square", "bg-greyObj", "rounded-full", "cursor-pointer");
        if (i == 0)
            crewMem.classList.add("active");
        crewMem.dataset.index = i;
        crewSelectorGroup.appendChild(crewMem);
    }
    let members = document.querySelectorAll(".crewMem");

    // Create crewMem image for each crewMem in JSON file
    members.forEach(member => {
        imageBox = document.createElement("div");
        imageBox.classList.add("crewImageBox", "absolute", "border-b-2", "w-[350px]", "border-greyLine", "flex", "justify-center", "sm:w-[650px]", "sm:border-0", "sm:bottom-0", "left-1/2", "-translate-x-1/2", "lg:w-1/2", "lg:left-3/4")
        imageBox.dataset.index = member.dataset.index;
        imageBox.dataset.status = "pending";
        crewImg = document.createElement("img");
        crewImg.src = array[+member.dataset.index].images.png;
        crewImg.classList.add("crewImg", "w-1/2", "lg:w-1/2", "duration-300");
        if (imageBox.dataset.index == 0) {
            imageBox.dataset.status = "active";
        }
        imageBox.appendChild(crewImg);
        content.prepend(imageBox);
    })
    crewName.innerHTML = array[0].name.toUpperCase();
    crewRole.innerHTML = array[0].role.toUpperCase();
    crewDesc.innerHTML = array[0].bio;
    selectCrewMem(array);
}