const inpNavn = document.getElementById("inpNavn");
const outNavn = document.getElementById("outNavn");

function utskrift() {
    outNavn.innerHTML = "Hei " + inpNavn.value + ", du er en trivelig kar"
}

inpNavn.addEventListener("input", utskrift);