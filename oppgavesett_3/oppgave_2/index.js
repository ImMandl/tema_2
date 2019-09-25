const bredde = Number(prompt("Hva er bredden til rektangelet?"));
const hoyde = Number(prompt("Hva er høyden til rektangelet?"));

function rektangel(b, h) {
    const arealet = (b * h);
    document.write("Arealet på rektangelet er " + arealet);
}

rektangel(bredde, hoyde);