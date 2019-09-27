const divEn = document.querySelector("#divEn");
const divTo = document.querySelector("#divTo");

const fargeEn = prompt("Hvilken farge skal den første diven ha?")
// const fargeTO = prompt("Hvilken farge skal den andre diven ha?")

const breddeEn = prompt("Hvilken bredde skal den første diven ha?")
// const breddeTo = prompt("Hvilken bredde skal den andre diven ha?")

const hoydeEn = prompt("Hvilken høyde skal den første diven ha?")
// const hoydeTo = prompt("Hvilken høyde skal den andre diven ha?")



function endeFarge() {
    divEn.backgroundColor = fargeEn.value;
}

fargeEn.addEventListener("input", endreFarge);