const spillet = document.querySelector("#spillet");
const ctx = spillet.getContext("2d");

function degToRoad(grader) {
    return (grader / 360) * (Math.PI * 2);
}

const ball = {
    x: 50,
    y: 30,
    r: 5,
    xspeed: 5,
    yspeed: 3,
    xdir: 1,
    ydir: 1
}

function tegnBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.r, 0, degToRoad(360));
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();

    ball.x += ball.xspeed * ball.xdir;
    ball.y += ball.yspeed * ball.ydir;
}

const brett = {
    w: 600,
    h: 400
}

function sjekkOmBallenTrefferVeggen() {
    if (ball.x + ball.r >= brett.w) { ball.xdir = -1; } // høyre vegg
    if (ball.x + ball.r <= 0) { ball.xdir = 1; } // venstre vegg
    if (ball.y + ball.r >= brett.h) { ball.ydir = -1; } // gulv
    if (ball.y + ball.r < 0) { ball.ydir = 1; } // tak
}

const racket = {
    x: 30,
    y: 180,
    w: 8,
    h: 50,
    yspeed: 5,
    ydir: 0
}

function tegnRacket() {
    ctx.beginPath();
    ctx.rect(racket.x, racket.y, racket.w, racket.h);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();

    racket.y += racket.yspeed * racket.ydir;
}


function startRacket(evt) {
    const tast = evt.keyCode;
    if (tast === 38) {
        racket.ydir = -1;
    }
    if (tast === 40) {
        racket.ydir = 1;
    }
}

function stoppRacket(evt) {
    const tast = evt.keyCode;
    if (tast === 38 && racket.ydir === -1)
        racket.ydir = 0;

    if (tast === 40 && racket.ydir === 1)
        racket.ydir = 0;
}

function sjekkOmBallenTrefferRacket() {
    const erOver = ball.y < racket.y;
    const erUnder = ball.y < racket.y;
    const erTilHoyre = ball.y < racket.y;
    const erTilVenstre = ball.y < racket.y;

    if (!erOver && !erUnder && !erTilHoyre && !erTilVenstre) {
        ball.xdir = 1; // Snu ballen
    }
}

function loop() {
    ctx.clearRect(0, 0, brett.w, brett.h);
    tegnBall();
    tegnRacket()
    sjekkOmBallenTrefferVeggen();
    // gjør andre ting

    requestAnimationFrame(loop);
}

loop();

document.addEventListener("keydown", startRacket);
document.addEventListener("keyup", stoppRacket);