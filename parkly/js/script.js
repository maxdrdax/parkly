//show leaflet map
const map = L.map('map').setView([47.3769, 8.5417], 13);
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}{r}.png', {
    minZoom: 12,
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors, © CARTO'
}).addTo(map);


// Asynchrone Funktion, um Parkplatzdaten von einer API zu laden
async function loadData() {
    const url = 'https://api.parkendd.de/Zuerich';
    try {
        const response = await fetch(url);
        return await response.json(); // Gibt die JSON-Daten zurück
    } catch (error) {
        console.error(error);
        return false;
    }
}

// Lädt die Daten und speichert sie in der Variable "data"
const data = await loadData(); 
const parkplaetze = data.lots; // Holt das Array mit den Parkplatzdaten aus dem geladenen JSON
console.log(parkplaetze);

// Geht jeden Parkplatz im Array durch
parkplaetze.forEach(parkplatz => {
    let name = parkplatz.name;
    let free = parkplatz.free;
    let total = parkplatz.total;
    let adresse = parkplatz.address;
    let coords = parkplatz.coords;
    let state = parkplatz.state;

    // Erstelle ein neues div-Element für den Parkplatz
    const card = document.createElement('div');
    card.innerHTML = `
        <h2>${name}</h2>
        <p>Status: ${state}</p>
        <p>Freie Plätze: ${free}</p>
        <p>Gesamtplätze: ${total}</p>
        <p>Adresse: ${adresse}</p>
    `;

});

const LeafIcon = L.Icon.extend({
    options: {
        iconSize:     [100, 100],
        iconAnchor:   [22, 94],
        popupAnchor:  [26, -65],
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

  document.querySelector('.leaflet-popup-content-wrapper');


  if (p.coords) {
    L.marker([p.coords.lat, p.coords.lng], { icon })
      .addTo(map)
      .bindPopup(`<strong>${p.name}</strong><br>
        Status: ${p.state} <br>
        ${p.free} free spots<br>
        Address: ${p.address}`);
  }
});
