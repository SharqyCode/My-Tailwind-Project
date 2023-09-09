let members = document.querySelectorAll(".crewMem");
let crewImg = document.querySelector("#crewImg");
let crewRole = document.querySelector("#crewRole");
let crewName = document.querySelector("#crewName");
let crewDesc = document.querySelector("#crewDesc");

getMembers();

async function getMembers() {
    let response = await fetch("./data.json");
    let data = (await response.json()).crew;
    console.log(data);
    displayCrewInfo(data);
}

function displayCrewInfo(array) {
    members.forEach(member => {
        member.addEventListener("click", () => {
            if (!member.classList.contains("active")) {
                let cur = document.querySelector(".crewMem.active");
                cur.classList.remove("active");
                member.classList.add("active");
            }
            let memberIndex = member.dataset.index
            crewImg.src = array[memberIndex].images.png;
            crewName.innerHTML = array[memberIndex].name.toUpperCase();
            crewRole.innerHTML = array[memberIndex].role.toUpperCase();
            crewDesc.innerHTML = array[memberIndex].bio;
        })
    })
}