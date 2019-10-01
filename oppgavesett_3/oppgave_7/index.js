const inpOverskrift = document.querySelector("#inpOverskrift");
const inpBildeURL = document.querySelector("#inpBildeURL");

const formArtikkel = document.querySelector("#formArtikkel");

const outOverskrift = document.querySelector("#outOverskrift");
const outBildeURL = document.querySelector("#outBildeURL");

function artikkel(onClick) {
    onClick.preventDefault();

    outOverskrift.innerText = inpOverskrift.value;
    outBildeURL.src = inpBildeURL.value;

}

formArtikkel.addEventListener("submit", artikkel)
