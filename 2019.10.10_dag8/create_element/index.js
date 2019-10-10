const main = document.querySelector("main");

main.innerHTML += `
    <h1>Dette er en overskrift</h1>
`

// lager et HTML-element
const overskrift = document.createElement("h2");
overskrift.innerText = "Hello World";
overskrift.className = "tekst";
overskrift.id = "t12";
overskrift.style.color = "purple";

main.appendChild(overskrift);

overskrift.onclick = () => main.removeChild(overskrift);