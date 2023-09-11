let boxes = document.querySelectorAll(".box");
let nums = document.querySelectorAll(".num");



nums.forEach(num => {
    num.addEventListener("click", () => {
        let curActive = document.querySelector(`.box[data-status="active"]`);
        let curIndex = curActive.dataset.index;
        let newActive = document.querySelector(`.box[data-index="${num.dataset.index}"]`)
        if (curIndex != num.dataset.index) {
            if (num.dataset.index > curIndex) {
                newActive.dataset.status = "nextRight";
                curActive.dataset.status = "nextLeft";
            }
            else if (num.dataset.index < curIndex) {
                newActive.dataset.status = "nextLeft";
                curActive.dataset.status = "nextRight";
            }
            setTimeout(() => {
                newActive.dataset.status = "active";
                curActive.dataset.status = "pending";
                curIndex = num.dataset.index;
                console.log(curActive);
                console.log(newActive);
                console.log(curIndex);
            }, 400);
        }
    })
})

// nums.forEach(num => {
//     num.addEventListener("click", () => {
//         let nextLeft = document.querySelector(`.box[data-index="${(num.dataset.index - 1 >= 0) ? num.dataset.index - 1 : 0}"]`);
//         nextLeft.dataset.status = "nextLeft";
//         let nextRight = document.querySelector(`.box[data-index="${(num.dataset.index + 1) % (nums.length - 1)}"]`);
//         nextRight.dataset.status = "nextRight";
//         let curActive = document.querySelector(`.box[data-status="active"]`);
//         if (curActive != null)
//             curActive.dataset.status = "pending";
//         let active = document.querySelector(`.box[data-index="${num.dataset.index}"]`);
//         active.dataset.status = "active";
//         console.log(active);
//         console.log(nextLeft);
//         console.log(nextRight);
//         // box.nextElementSibling.dataset.status = "nextRight";
//         // box.previousElementSibling.dataset.status = "nextLeft";
//     })
// })