// Referere til poeng-teksten
const txtklikk = document.querySelector("#txtKlikk");
let antall = 0;

function tellOpp() {
    antall++; // øker antall med 1
    txtklikk.innerText = antall; // koblet teksten og antall sammen 
    txtklikk.style.fontSize = antall + "px";
}

document.addEventListener("click", tellOpp);