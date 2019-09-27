const divEn = document.querySelector("#divEn");

const inpFargeEn = prompt("Hvilken farge skal den første diven ha?")
document.write(`
    <div 
        id="div" 
        style="
            background-color: ${inpfargeEn.value}; 
            width: 200px; 
            height: 200px;
        ">
    </div>
`)

function endreFarge() {
    document.body.style.backgroundColor = fargeEn.value;
}


fargeEn.addEventListener("input", endreFarge);
