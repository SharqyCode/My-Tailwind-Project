let boxes = document.querySelectorAll(".box");
let nums = document.querySelectorAll(".num");



nums.forEach(num => {
    num.addEventListener("click", () => {
        let curActive = document.querySelector(`.box[data-status="active"]`);
        let curIndex = curActive.dataset.index;
        let newActive = document.querySelector(`.box[data-index="${num.dataset.index}"]`)
        if (curIndex != num.dataset.index) {
            // if (num.dataset.index > curIndex) {
            //     newActive.dataset.status = "nextRight";
            //     curActive.dataset.status = "nextLeft";
            // }
            // else if (num.dataset.index < curIndex) {
            //     newActive.dataset.status = "nextLeft";
            //     curActive.dataset.status = "nextRight";
            // }
            curActive.dataset.status = "pending";
            setTimeout(() => {
                newActive.dataset.status = "active";
                curIndex = num.dataset.index;
                console.log(curActive);
                console.log(newActive);
                console.log(curIndex);
            }, 300);
        }
    })
})

