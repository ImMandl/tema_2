const sectionHandleliste = document.getElementById("sectionHandleliste");
const skjemaVarer = document.querySelector("#skjemaVarer");
const inpVare = document.querySelector("#inpVare");

const varer = [];

function visHandleliste() {
    sectionHandleliste.innerHTML = "";
    for (const [indeks, vare] of varer.entries()) {
        sectionHandleliste.innerHTML += `
            <div>${vare}</div>
            <div onclick="slett(${indeks})" class="btn">X</div>
        `;
    }
}

function leggTilVare(evt) {
    evt.preventDefault();
    varer.push(inpVare.value);
    visHandleliste();
    skjemaVarer.reset();
}

skjemaVarer.addEventListener("submit", leggTilVare);

function slett(indeks) {
    varer.splice(indeks, 1);
    visHandleliste();
}

visHandleliste();