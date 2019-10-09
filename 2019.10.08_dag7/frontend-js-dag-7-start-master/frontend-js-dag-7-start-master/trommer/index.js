

function spillTromme(evt) {
    const tastekode = evt.keyCode;

    const lyd = document.querySelector(`audio[data-key="${tastekode}"]`);

    // Hvis ikke lyd - avslutt funksjonen
    if (!lyd) {
        return;
    }

    // Vi spoler lyden tilbake
    lyd.currentTime = 0;

    lyd.play();

    const divElement = document.querySelector(`main div[data-key="${tastekode}"] `);

    /*
    divElement.style.backgroundColor = "orange";
    divElement.style.transform = "scale(1.2)";
    */

    divElement.animate([
        { backgroundColor: "orange", transform: "scale(1.2)" },
        { backgroundColor: "transparent", transform: "scale(1.0)" }
    ], 100);
}

document.addEventListener("keydown", spillTromme);