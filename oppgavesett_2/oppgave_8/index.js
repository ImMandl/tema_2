const inpURL = document.querySelector("#inpURL");
const inpBredde = document.querySelector("#inpBredde");
const inpTittel = document.querySelector("#inpTittel");
const newIMG = document.querySelector("#newIMG");

function imgFromURL() {
    newIMG.src = inpURL.value;
}

function nyBredde() {
    newIMG.width = inpBredde.value;
}

function nyTittel() {
    newIMG.title = inpTittel.value;
}


inpURL.addEventListener("input", imgFromURL);
inpBredde.addEventListener("input", nyBredde);
inpTittel.addEventListener("input", nyTittel);