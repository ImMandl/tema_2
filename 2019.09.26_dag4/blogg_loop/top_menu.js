const topMenu = document.querySelector("#topMenu");

const bloggere = [
    { navn: "Annijor", url: "annijor.html" },
    { navn: "Sophie elise", url: "sophieelise.html" },
    { navn: "Pappahjertet", url: "pappahjertet.html" },
];

for (const blogger of bloggere) {
    const valgtSide = document.location.href;
    const sjekk = valgtSide.search(blogger.url);

    let klasse = "";
    if (sjekk > 0) {
        klasse = "valgt";
    }

    console.log(valgtSide);

    topMenu.innerHTML += `
        <a class="${klasse}" href="${blogger.url}">${blogger.navn}</a>
        `;
}