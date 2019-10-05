const sectionHandleliste = document.getElementById("sectionHandleliste");

const varer = ["Prim", "Kaviar", "Egg", "Smør", "Rips"];

function visHandleliste() {
    sectionHandleliste.innerHTML = "";
    for (const [indeks, vare] of varer.entries()) {
        sectionHandleliste.innerHTML += `
            <div>${vare}</div>
            <div onclick="slett(${indeks})" class="btn">X</div>
        `;
    }
}

function slett(indeks) {
    varer.splice(indeks, 1);
    visHandleliste();
}

// slett(2);

visHandleliste();