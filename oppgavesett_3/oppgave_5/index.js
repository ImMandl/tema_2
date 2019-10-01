const inpX = document.querySelector("#inpX");
const inpY = document.querySelector("#inpY");
const box = document.querySelector("#box");

function flytt() {
    box.style.left = inpX.value + "px";
    box.style.top = inpY.value + "px";
}

inpX.addEventListener("input", flytt);
inpY.addEventListener("input", flytt);