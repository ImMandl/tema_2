// Oppgavestt 4 - oppgave 8 - 3b)

const passord = "banan";

let inputFraBruker = "banan";

if (inputFraBruker === passord) {
    console.log("Du har skrevet riktig passord");
} else {
    console.log("Feil passord");
}

// Det er innrykk i starten av linje 6 og 8 da de ligger inne i noe
// Innrykker hjelper oss å skille mellom parent og child

// Koden er ikke sikker da passordet ikke faktisk er input fra brukeren, men heller lagret i selve koden
// Det gjør at uansett hvem som skulle prøvd seg ville fått tilgang med en gang de kjørte koden