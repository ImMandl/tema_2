const divEn = document.querySelector("#divEn");
const divTo = document.querySelector("#divTo");


function endreDiv(boksEn, boksTo) {
    boksEn.style.backgroundColor = prompt("Div 1: farge");
    boksEn.style.width = prompt("Div 1: bredde") + "px";
    boksEn.style.height = prompt("Div 1: høyde") + "px";

    boksTo.style.backgroundColor = prompt("Div 2: farge");
    boksTo.style.width = prompt("Div 2: bredde") + "px";
    boksTo.style.height = prompt("Div 2: høyde") + "px";
}

endreDiv(divEn, divTo);
