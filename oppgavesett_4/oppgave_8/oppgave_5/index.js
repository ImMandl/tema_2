const inpTimer = document.querySelector("#inpTimer");
const submitForm = document.querySelector("#submitForm");

const timetall = 140;
const prosent = 0.10;

const fravaersgrensa = Math.max(timetall * prosent); // = 14

function regnestykke(evt) {
    evt.preventDefaul();

    if (fravaersgrensa < inpTimer.value) {
        console.log("Du har nok timer i dette faget");
    } else {
        console.log("Du har for få timer i dette faget");
    }
}

regnestykke();

submitForm.addEventListener("submit", regnestykke);

