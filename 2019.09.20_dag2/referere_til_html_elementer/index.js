// Referere til HTML-element med JS
const overskrift = document.getElementById("overskrift");

overskrift.innerHTML = "Jeg er <em>skrevet</em> i JavaScript";

console.log(overskrift);
console.log(overskrift.innerHTML);

console.log(document.body);
console.log(document.head);