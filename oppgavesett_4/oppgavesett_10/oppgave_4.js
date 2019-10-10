// Oppgavestt 4 - oppgave 10


// Oppgave 4 
// 1)
// Hvis man bytter om rekke følge på rotate(${rotasjon}) translateY(${avstand}) blir illustrasjon ikke lenger enn trekant
// men heller en stjerne. Det er fortsatt 3 linjer, men en vil nå gå rett opp og ned. En annen vil strekke seg opp mot høyre
// og den andre vil strekke seg opp mot venstre
main.innerHTML += `<div style="transform: rotate(${rotasjon}) translateY(${avstand})"></div>`;
main.innerHTML += `<div style = "transform: translateY(${avstand}) rotate(${rotasjon}) " ></div>`;

// 2)
// hvis man bytter ut 
for (let i = 0; i < 3; i++) {

    const rotasjon = i * 120 + "deg";
    const avstand = 34 + "px";
}
// med 
for (let i = 0; i < 4; i++) {

    const rotasjon = i * 90 + "deg";
    const avstand = 34 + "px";
}
// vil man få en firkant istedenfor en trekant

// 3)
// For å få en sekskant måtte jeg endre koden til dette
// i < 6 
// i * 60 * "deg"
// 100 + "px"
for (let i = 0; i < 6; i++) {

    const rotasjon = i * 60 + "deg";
    const avstand = 100 + "px";
}