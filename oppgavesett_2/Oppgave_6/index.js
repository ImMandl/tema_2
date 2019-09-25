const tallEn = document.querySelector("#tallEn");
const tallTo = document.querySelector("#tallTo");
const svar = document.querySelector("#svar");
const velgRegneart = document.querySelector("#velgRegneart");

function addere() {
    const en = Number(tallEn.value);
    const to = Number(tallTo.value);

    const regneart = velgRegneart.value;
    console.log(regneart);

    const pluss = en + to;
    const minus = en - to;
    const gange = en * to;
    const dele = en / to;

    if(regneart === "+") {
        svar.innerText = pluss;
    }

    if(regneart === "-") {
        svar.innerText = minus;
    }

    if(regneart === "*") {
        svar.innerText = gange;
    }

    if(regneart === "/") {
        svar.innerText = dele;
    }

}

tallEn.addEventListener("input", addere);
tallTo.addEventListener("input", addere);
velgRegneart.addEventListener("change", addere);

