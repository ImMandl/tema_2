const inpFornavn = document.querySelector("#inpFornavn");
const inpEtternavn = document.querySelector("#inpEtternavn");

const inpStilling = document.querySelector("#inpStilling");
const inpURL = document.querySelector("#inpURL");
const inpForm = document.querySelector("#inpForm");

const outFornavn = document.querySelector("#outFornavn");
const outEtternavn = document.querySelector("#outEtternavn");
const stilling = document.querySelector("#stilling");
const newIMG = document.querySelector("#newIMG");


function visittkort() {
    outFornavn.innerHTML = inpFornavn.value;
    outEtternavn.innerHTML = inpEtternavn.value;
    stilling.innerHTML = inpStilling.value;
    newIMG.src = inpURL.value;
}

inpFornavn.addEventListener("input", visittkort);
inpEtternavn.addEventListener("input", visittkort);
inpEtternavn.addEventListener("input", visittkort);
inpStilling.addEventListener("input", visittkort);
inpURL.addEventListener("input", visittkort);