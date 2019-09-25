const inpURL = document.querySelector("#inpURL");
const newIMG = document.querySelector("#newIMG");

function imgFromURL() {
    newIMG.innerHTML = inpURL.value;
}

inpURL.addEventListener("input", imgFromURL);