const inpNavn = document.querySelector("#inpNavn");
const inpStilling = document.querySelector("#inpStilling");
const inpURL = document.querySelector("#inpURL");

const fulltnavn = document.querySelector("#fulltnavn");
const stilling = document.querySelector("#stilling");
const newIMG = document.querySelector("#newIMG");


function visittkort() {
    fulltnavn.innerHTML = inpNavn.value;
    stilling.innerHTML = inpStilling.value;
    newIMG.src = inpURL.value;
}

inpNavn.addEventListener("input", visittkort);
inpStilling.addEventListener("input", visittkort);
inpURL.addEventListener("input", visittkort);