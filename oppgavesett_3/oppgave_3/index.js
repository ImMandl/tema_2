const divEn = document.querySelector("#divEn");
const divTo = document.querySelector("#divTo");

const hoyde = Number(prompt("Hva er høyden?"));
const bredde = Number(prompt("Hva er bredden?"));
const farge = prompt("Hvilken farge?");


function endeFarge() {
    document.divEN.style.backgroundColor = divEn.value;
}

farge.oninput = endreFarge;