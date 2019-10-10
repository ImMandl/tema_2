// Oppgavestt 4 - oppgave 10

// Oppgave 3)
// a)
const main = document.querySelector("main");
// Henter inn main elementet fra html. Henter ikke en id siden det ikke brukes "#". 

for (let i = 0; i < 3; i++) { /* gjør noe */ }
// 

main.innerHTML += `<div></div>`;
// skriver ut div elementer som ikke fjernes når det blir skrevet ut et nytt siden den har +=

< div style="transform: rotate(${rotasjon}) translateY(${avstand})" ></div>
// sier at div elementet skal trasnformeres som følge av rotasjon og avstand.

// b)
i < 3
// Dette er satt opp for å si at så lenge i er mindre enn 3 skal funksjonen kjøre

rotasjon = i * 120 + "deg"
// Dette er satt opp for å si at rotasjon, som brukes for å transformere div
// skal være like i (så den kjører roteres 3 ganger siden i ikke skal kjøre mere enn 3 ganger)
// 120 for å si at for hver gang funksjonen blir kjørt skal den roteres 120 grader
// "deg" sier at 120 er grader (degrees)

