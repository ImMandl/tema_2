function spillSang(start, frekvens) {
    const ac = new AudioContext();
    const osc = ac.createOscillator();
    osc.connect(ac.destination);

    osc.frequency.value = frekvens;

    osc.start(start);
    osc.stop(start + 0.5);
}

const toner = [
    { start: 0, frekvens: 130.82, varighet: 0.5 }, // C
    { start: 0.5, frekvens: 146.83, varighet: 0.5 }, // D
    { start: 1, frekvens: 164.81, varighet: 0.5 }, // E
    { start: 1.5, frekvens: 174.61, varighet: 0.5 }, // F 
    { start: 2, frekvens: 196, varighet: 0.5 }, // G
    { start: 2.5, frekvens: 220, varighet: 0.5 }, // A
    { start: 3, frekvens: 246.94, varighet: 0.5 }, // B
    { start: 3.5, frekvens: 220, varighet: 0.5 }, // A
    { start: 4, frekvens: 196, varighet: 0.5 }, // G
    { start: 4.5, frekvens: 174.61, varighet: 0.5 }, // F
    { start: 5, frekvens: 164.81, varighet: 0.5 }, // E
    { start: 5.5, frekvens: 146.83, varighet: 0.5 }, // D
    { start: 6, frekvens: 130.82, varighet: 0.5 }, // C

]

function startSang() {
    for (const tone of toner) {
        spillSang(tone.start, tone.frekvens, tone.varighet);
    }
}


document.onclick = startSang;