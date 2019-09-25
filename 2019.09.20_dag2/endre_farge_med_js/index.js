const inpFarge = document.querySelector("#inpFarge");

function endreFarge() {
    // Kaller på document (nettsiden) sin body, så style, så background-color
    // Den skal bli det vi skriver i input og dens value
    document.body.style.backgroundColor = inpFarge.value;
}

inpFarge.addEventListener("input", endreFarge);