const blomsterForm = document.querySelector("#blomsterForm");
const inpBlomst = document.querySelector("#inpBlomst");
const divBlomster = document.querySelector("#divBlomster");

const blomster = [];

function skrivUtBlomst() {
    divBlomster.innerHTML = "";
    for (let i = 0; i < blomster.length; i++) {
        const blomst = blomster[i];
        divBlomster.innerHTML += `
            <div>${blomst}</div>
        `;
    }
}

skrivUtBlomst();

function leggTilBlomster(evt) {
    evt.preventDefault();
    blomster.push(inpBlomst.value);
    skrivUtBlomst();
}


blomsterForm.addEventListener("submit", leggTilBlomster);

console.log(blomster);