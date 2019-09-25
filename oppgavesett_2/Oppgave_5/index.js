const tallEn = document.querySelector("#tallEn");
const tallTo = document.querySelector("#tallTo");
const svar = document.querySelector("#svar");

function addere() {
    svar.innerHTML = Number(tallEn.value) + Number(tallTo.value)
}

tallEn.addEventListener("input", addere);
tallTo.addEventListener("input", addere);
