const btnDag = document.querySelector("#btnDag");
const btnNatt = document.querySelector("#btnNatt");
const div = document.querySelector("#div");


function settModus(evt) {
    if (evt) {
        document.body.style.backgroundColor = "orange";
    } else {
        document.body.style.backgroundColor = "blue";
    }
}

btnDag.addEventListener("click", settModus);
btnNatt.addEventListener("click", settMmodus);

document.addEventListener("click", settModus);

document.getElementById("div").style.backgroundColor = "blue";
document.getElementById("div").style.backgroundColor = "orange";