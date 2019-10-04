const divTrykk = document.querySelector("#divTrykk");

trykk = [];

function skrivUtTrykk() {
    divTrykk.innerHTML = "";
    for (let i = 0; i < trykk.length; i++) {
        const ettTrykk = trykk[i];
        divTrykk.innerHTML += `
            <div>${ettTrykk}</div>
        `;
    }
}

skrivUtTrykk();

function lagreKlikk(evt) {
    trykk.push(evt.clientX);
    trykk.push(evt.clientY);
    skrivUtTrykk();
}

document.addEventListener("click", lagreKlikk)

console.log(trykk);