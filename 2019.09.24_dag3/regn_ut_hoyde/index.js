// Regn ut hvor høy du blir

// Input vi får fra prompt og annen type input er String
const inpMorsHoyde = prompt("Hvor høy er moren din?");
const inpFarsHoyde = prompt("Hvor høy er faren din?");

// Vi må gjøre om String til Number (tekst til tall)
const morsHoyde = Number(inpMorsHoyde);
const farsHoyde = Number(inpFarsHoyde);

function finnHoyde(mh, fh) {
    // Hvis du er gutt er formelen
    const dinHoyde = (mh + fh + 12) / 2;
    document.write("Du blir " + dinHoyde + "cm høy");
}

// Starter funksjonen
finnHoyde(morsHoyde, farsHoyde);