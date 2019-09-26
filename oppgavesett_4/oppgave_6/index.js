const fasit = 50;
const inpSvar = prompt("Skriv et tall mellom 1-100");

const svar = Number(inpSvar);

if (svar < fasit) {
    document.write("<h1>Tallet er lite</h2>");
} else if (svar > fasit) {
    document.write("<h1>Tallet er stort</h2>");
} else {
    document.write("<h1>Taller er akkurat midt på!</h2>");
}