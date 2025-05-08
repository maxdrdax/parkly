console.log("Hallo script.js");
const parking_cards = document.querySelector('#parking_cards');

async function loadData() {
    const url = 'https://api.parkendd.de/Zuerich'; // mit korrekter API-URL ersetzen
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}
const data = await loadData();
const parkplaetze = data.lots; // das ist ein array mit den Parkplätzen
// console.log(data); // gibt die Daten der API oder false in der Konsole aus
console.log(parkplaetze); // gibt die Daten der API oder false in der Konsole aus


parkplaetze.forEach(parkplatz => {
    let name = parkplatz.name; // Name des Parkplatzes
    let free = parkplatz.free; // Anzahl der freien Plätze
    let total = parkplatz.total; // Gesamtanzahl der Plätze

    // Erstelle ein neues div-Element für den Parkplatz
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h2>${name}</h2>
        <p>Freie Plätze: ${free}</p>
        <p>Gesamtplätze: ${total}</p>
    `;
    // Füge das neue div-Element zum Container hinzu
    parking_cards.appendChild(card);

});