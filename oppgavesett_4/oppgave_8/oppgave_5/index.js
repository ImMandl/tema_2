const inpTimer = document.querySelector("#inpTimer");
const submitForm = document.querySelector("#submitForm");

const utskift = document.querySelector("#utskrift");

const timetall = 140;
const prosent = 0.10;

const fravaersgrensa = Math.max(timetall * prosent); // = 14

function regnestykke(evt) {
    evt.preventDefault();

    if (fravaersgrensa < inpTimer.value) {
        utskrift.innerHTML = `<h3>Du har nok timer i dette faget</h3>`;
    } else {
        utskrift.innerHTML = `<h3>Du har for få timer i dette faget</h3>`;
    }
}

submitForm.addEventListener("submit", regnestykke);

