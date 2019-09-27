const rettEn = prompt("Hva er din nummer 1 favoritt rett?");
const rettTo = prompt("Hva er din nummer 2 favoritt rett?");
const rettTre = prompt("Hva er din nummer 3 favoritt rett?");

function liste(rettEn, rettTo, rettTre) {
    document.write(`
    <div>
        <h1>Dine favoritt-retter!</h1>
        <ol>
            <li>Fiskeboller</li>
            <li>${rettEn}</li>
            <li>${rettTo}</li>
            <li>${rettTre}</li>
        </ol>
    </div>
    `);
}

liste(rettEn, rettTo, rettTre);