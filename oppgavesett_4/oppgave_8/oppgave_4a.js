// Oppgavestt 4 - oppgave 8 - 4)

// original kode
const passord = "banan";

let inputFraBruker = "banan";

if (inputFraBruker === passord) {
    console.log("Du har skrevet riktig passord");
} else {
    console.log("Feil passord");
}

// resultatet hvis man bytter inputFraBruker til eple så vil man få "feil passord"
const passord = "banan";

let inputFraBruker = "eple";

if (inputFraBruker === passord) {
    console.log("Du har skrevet riktig passord");
} else {
    console.log("Feil passord");
}

//-----------------------------------------------------

// Hvis man bytter plass på console.log meldingene får du feil passord
// feil passord meldingen har nå blitt meldingen for om du skriver inn riktig passord
const passord = "banan";

let inputFraBruker = "banan";

if (inputFraBruker === passord) {
    console.log("Feil passord");
} else {
    console.log("Du har skrevet riktig passord");
}

//-----------------------------------------------------

// Hvis man bytter ut "banan" i inputFraBruker med et prompt som spør om passord får brukeren selv lov å velge hva input skal være
// Skriver du inn banan får du meldingen du har skrevet riktig passord
// Skriver du inn noe annet får du melding om at det er feil passord
const passord = "banan";

let inputFraBruker = prompt("Passord: ");

if (inputFraBruker === passord) {
    console.log("Du har skrevet riktig passord");
} else {
    console.log("Feil passord");
}