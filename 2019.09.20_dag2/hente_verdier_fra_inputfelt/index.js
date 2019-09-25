const inpNavn = document.querySelector("#inpNavn");
const outNavn = document.getElementById("outNavn");

// console.log(inpNavn.value);

function visNavn() {
    outNavn.innerHTML = inpNavn.value;
}

// inpNavn.oninput = visNavn;
inpNavn.addEventListener("input", visNavn);
