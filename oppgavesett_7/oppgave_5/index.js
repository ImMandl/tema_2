const show = document.querySelector("#show");
const bilde = document.querySelector("#bilde");

function visBilde(evt) {
    evt.preventDefault();
    bilde.innerHTML = `
        <img src="https://bp6dqganwv-flywheel.netdna-ssl.com/wp-content/uploads/2019/09/Epletre.jpg">
    `;
}

show.addEventListener("submit", visBilde);