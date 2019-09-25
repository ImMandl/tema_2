const fornavn = prompt("Hva er ditt fornavn?")
const etternavn = prompt("Hva er ditt etternavn?")

function fulltNavn(fornavn, etternavn) {
    const dittNavn = (fornavn + " " + etternavn);
    document.write("Ditt navn er " + dittNavn);
}

fulltNavn(fornavn, etternavn);