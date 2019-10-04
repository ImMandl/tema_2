tallene = [20, 31, 9, 4, 32, 43, 12, 4, 13];

// oppgave a
console.log(tallene.reduce((a, b) => a + b, 0));

// oppgave b
const overTjue = tallene.filter(tall => tall >= 20);
console.log(overTjue);

// oppgave c
console.log(Math.max(...tallene));