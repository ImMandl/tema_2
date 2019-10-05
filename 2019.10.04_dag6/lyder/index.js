const btnStart = document.querySelector("#btnStart");

let ac;

/*
function endreFrekvens(evt) {
    osc.frequency.value = evt.clientX;
}
*/

function spillTone(frekvens, startTid) {
    osc = ac.createOscillator();
    osc.connect(ac.destination);

    osc.frequency.value = frekvens;

    osc.start(startTid);
    osc.stop(startTid + 0.5);

    //document.addEventListener("mouseove", endreFrekvens);
}

function start() {
    ac = new AudioContext();

    spillTone(440, 0, 0.2);
    spillTone(230, 0.2, 0.4);
    spillTone(410, 0.4, 0.6);
}

btnStart.addEventListener("click", start);