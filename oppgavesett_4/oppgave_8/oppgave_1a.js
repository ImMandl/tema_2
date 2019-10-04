// Oppgavestt 4 - oppgave 8 - 1a)

// setter passordet 
const passord = "banan";

// sier at input fra brukeren er "banan"
let inputFraBruker = "banan";

// hvis input fra brukern er "banan" skriv så ut "du har skrevet riktig passord"
// hvis ikke så skriv "feil passord"
if (inputFraBruker === passord) {
    console.log("Du har skrevet riktig passord");
} else {
    console.log("Feil passord");
}

// siden bruker input er banan vil console.log skrive ut "du har skrevet riktig passord"