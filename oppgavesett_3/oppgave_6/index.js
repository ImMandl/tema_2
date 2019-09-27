const inpSkriftStorrelse = document.querySelector("#inpSkriftStorrelse");
const inpSkriftFarge = document.querySelector("#inpSkriftFarge");
const inpBakgrunnsFarge = document.querySelector("#inpBakgrunnsFarge");

function storrelse() {
    document.body.style.fontSize = inpSkriftStorrelse.value + "px";
}

function fargeFont() {
    document.body.style.color = inpSkriftFarge.value;
}

function fargeBakgrunn() {
    document.body.style.backgroundColor = inpBakgrunnsFarge.value;
}

inpSkriftStorrelse.addEventListener("input", storrelse);
inpSkriftFarge.addEventListener("input", fargeFont);
inpBakgrunnsFarge.addEventListener("input", fargeBakgrunn);