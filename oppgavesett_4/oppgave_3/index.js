const hesteListe = document.querySelector("#hesteListe");

const hester = [
    { navn: "Birk" },
    { navn: "Odin" },
    { navn: "Balder" },
    { navn: "Zafira" },
    { navn: "Luna" },
]

for (const hest of hester) {

    hesteListe.innerHTML += `
    <li>${hest.navn}</li>
    `;
}