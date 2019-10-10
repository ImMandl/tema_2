const box = document.querySelector("#box");

let xpos = 500;
let speed = 1;
let boxIsOn = true;
let roter = 45;

function moveBox() {
    xpos += speed;
    box.style.left = xpos + "px";
}

function EndreBox() {
    if (xpos > 600) {
        box.style.backgroundColor = "coral";
    } if (xpos > 700) {
        box.style.backgroundColor = "hotpink";
    } if (xpos > 800) {
        box.style.transform = `rotate(${roter}deg)`;
    }
}

function checkBox() {
    if (xpos > 805) {
        boxIsOn = false;
    }
}

function boxLoop() {
    moveBox();
    EndreBox();
    checkBox();

    if (boxIsOn) {
        requestAnimationFrame(boxLoop);
    }
}

boxLoop();