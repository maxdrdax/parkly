//show leaflet map
const map = L.map('map').setView([47.3769, 8.5417], 13); // Zürich Koordinaten
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors, © CARTO'
}).addTo(map);



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
    let adresse = parkplatz.address; // Adresse des Parkplatzes
    let coords = parkplatz.coords; // Koordinaten des Parkplatzes

    // Erstelle ein neues div-Element für den Parkplatz
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h2>${name}</h2>
        <p>Freie Plätze: ${free}</p>
        <p>Gesamtplätze: ${total}</p>
        <p>Adresse: ${adresse}</p>
    `;
    // Füge das neue div-Element zum Container hinzu
    parking_cards.appendChild(card);

});

const LeafIcon = L.Icon.extend({
    options: {
        iconSize:     [100, 100], // Adjusted to match the actual icon dimensions
        iconAnchor:   [22, 94],
        popupAnchor:  [-3, -76],
        // shadowUrl: 'PATH_TO_YOUR/leaf-shadow.png',
        shadowSize:   [50, 64],
        shadowAnchor: [4, 62]
    }
});

// drei farbige Icons mit Platzhalter für SVG
const greenIcon = new LeafIcon({ iconUrl: 'img/green.png' });
const orangeIcon = new LeafIcon({ iconUrl: 'img/orange.png' });
const redIcon = new LeafIcon({ iconUrl: 'img/red.png' });

// Marker setzen je nach Belegung
parkplaetze.forEach(p => {
  let icon = redIcon;
  if (p.free >= 100) {
    icon = greenIcon;
  } else if (p.free >= 40) {
    icon = orangeIcon;
  }

  if (p.coords) {
    L.marker([p.coords.lat, p.coords.lng], { icon })
      .addTo(map)
      .bindPopup(`<strong>${p.name}</strong><br>${p.free} freie Plätze`);
  }
});
