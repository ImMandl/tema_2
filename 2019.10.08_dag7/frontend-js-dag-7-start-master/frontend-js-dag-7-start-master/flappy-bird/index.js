// javascript
const theBird = document.querySelector("#theBird");
const main = document.querySelector("main");

//Fuglens y-posisjon
let ypos = 100;
// Hvor fort fuglen faller
let fart = 0.5;
// Gravity, skal gjøre så farten akselerer og få fuglen til å falle fortere ettersom man spiller
let g = 0.1;
// Styrken til trykket ditt som sender fuglen opp
let flaksekraft = 4;
// Hvor fort bakgrunnen går til venstre
let bakgrunnsfart = -1;
// Posisjonen til bakgrunnen
let bakgrunnspos = 0;
// Så lenge denne er true skal spillet kjøre
let theGameIsOn = true;

// Flytter bakgrunnen
function flyttBakgrunn() {
    // Legger sammen posisjonen med farten
    // Endrer da posisjonen til bakgrunnen 
    bakgrunnspos += bakgrunnsfart;
    // Får bakgrunnen til å flytte seg til venstre
    main.style.backgroundPosition = `${bakgrunnspos}px 0`;
}

// Fuglen flakser 
function flaks() {
    fart = -flaksekraft;
}

// Når vi klikker går fuglen oppover
document.addEventListener("click", flaks);

// Flytter fuglen nedover
function fallNed() {
    // Plusser gravity med fart
    fart += g;
    // Plusser farten på ypos som lager bevegelse
    ypos += fart;
    // Kobler css opp mot ypos
    theBird.style.top = ypos + "px";
    // Får fuglen til å rotere når den faller
    theBird.style.transform = `rotate(${fart * 4}deg)`;
}

// Funksjonen sjekker om fuglen treffer bakken
function sjekkOmFuglenTrefferBakken() {
    // Når ypos blir høyere enn 370 skal spillet skru seg av
    if (ypos > 370) {
        // Skrur seg av
        theGameIsOn = false;
    }
}

function gameLoop() {

    // Starter fall funksjonen
    fallNed();

    // Flytter bakgrunnen så det ser ut som vi beveger oss
    flyttBakgrunn();

    // Starter sjekk funsjon
    sjekkOmFuglenTrefferBakken();
    // Sier om spillet er på eller ikke
    if (theGameIsOn) {
        //Starte funskjonen med en liten forsinkelse
        requestAnimationFrame(gameLoop);
    }
}

// Starter loopen
gameLoop();