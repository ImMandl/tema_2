const main = document.querySelector("main");

for (let i = 0; i < 60; i++) {

    const rotasjon = i * 6 + "deg";
    const avstand = 220 + "px";

    main.innerHTML += `
        <div 
            style="transform: rotate(${rotasjon}) translateY(${avstand})">
        </div>
    `;
}

const divElementer = document.querySelectorAll("div");

for (let i = 0; i < 60; i += 15) {
    divElementer[i].style.width = 3 + "px";
    divElementer[i].style.height = 14 + "px";
}