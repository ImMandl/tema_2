// Referanser til HTML-elementer
const inpNavn = document.querySelector("#inpNavn");
const btnStart = document.querySelector("#btnStart");
const txtInfo = document.querySelector("#txtInfo");

function visInfo() {
    txtInfo.innerHTML = inpNavn.value;
    txtInfo2.innerHTML = inpNavn.value;
    txtInfo3.innerHTML = inpNavn.value;
    txtInfo4.innerHTML = inpNavn.value;
    txtInfo5.innerHTML = inpNavn.value;
}

btnStart.onclick = visInfo;
