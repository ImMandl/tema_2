const fisker = ["Karpe", "Gullfisk", "Guppy", "Gjedde", "Dorade", "Havabbor", "Gjørs"]

// oppgave a - logg ut arrayet
console.log(fisker);

// oppgave b - legg til 2 fiskearter på starten og 2 andre slutten
console.log("La til: " + fisker.push("Baramundi", "Torsk"));
console.log("La til: " + fisker.unshift("Hamachi", "Makrell"));

// oppgave c - fjern den siste fisken
console.log("fjernet: " + fisker.shift());

// oppgave d - fjern den første fisken
console.log("fjernet: " + fisker.pop(1, 1));

// oppgave e - fjern fisk 4 og 5
console.log("fjernet: " + fisker.splice(4, 2));