const midtstill = document.querySelector("#midstill");

tallrekke = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let i = 0;

function byttBredde() {
    if (i >= tallrekke.length) {
        i = 0;
    }

    const tall = tallrekke[i];
    midstill.style.width = tall + "px";

    i++;
}

setInterval(byttBredde, 1000);