const inpBildeURL = document.querySelector("#inpBildeURL");
const inpOverskrift = document.querySelector("#inpOverskrift");
const inpDato = document.querySelector("#inpDato");
const inpSted = document.querySelector("#inpSted");
const inpGjester = document.querySelector("#inpGjester");

const formArtikkel = document.querySelector("#formArtikkel");
const arrangement = document.querySelector("#arrangement");

function artikkel(onClick) {
    onClick.preventDefault();

    const bilde = inpBildeURL.value;
    const overskrift = inpOverskrift.value;
    const dato = inpDato.value;
    const sted = inpSted.value;
    const gjester = inpGjester.value;

    arrangement.innerHTML += `
    <article class="container>
        <div class="img-container">
            <li><img src="${bilde}"></li>
        </div>
        <div>
            <li><h3>${overskrift}</h3></li>
            <div class="line">
                <li><p>${dato}</p></li>
                <li><p>${sted}</p></li>
            </div>
            <li><p>${gjester}</p></li>
            <div class="line">
                <li><a href="">interested</a></li>
                <li><a href="">going</a></li>
            </div>
        </div>
    </article>
    `

    //formArtikkel.reset();
}

formArtikkel.addEventListener("submit", artikkel)
