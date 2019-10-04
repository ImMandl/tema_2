const btnDag = document.querySelector("#btnDag");
const btnNatt = document.querySelector("#btnNatt");


function settModus(evt) {
    if (evt.clientX > innerWidth / 2) {
        document.body.style.backgroundColor = "orange";
    } else {
        document.body.style.backgroundColor = "blue";
    }
}



btnDag.addEventListener("click", settModus);
btnNatt.addEventListener("click", settModus);