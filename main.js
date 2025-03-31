/*
Skript für Lieblingsort 
*/
let stop = {
  title: "Azoren",
  user: "pauly0602",
  nr: 10,
  lat: 37.77,
  lng: -25.46,
  zoom: 11,
};

// Karte initialisieren
let map = L.map('map')
// Hintergrund definieren 
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

console.log(STOPS[0]);
console.log(STOPS[0].title);
for (let i=0; i<STOPS.length;i++) {
  console.log (i, STOPS [i],STOPS [i].title );
  // Marker zeichnen
let marker = L.marker([STOPS [i].lat,STOPS [i].lng]).addTo(map)
 // Popup definieren 
 marker.bindPopup(`<h2>${STOPS [i].title}</h2>
  <ul>
    <li> Geograph. Breite: ${STOPS [i].lat}°</li>
    <li> Geograph. Länge: ${STOPS [i].lng}°</li>
  </ul>
    In the Marlborough Region of New Zealand's South Island.
    `);

    // auf eigene Etappe blicken und Popup öffnen 

    if (STOPS [i].user == "pauly0602"){
      map.setView([STOPS [i].lat, STOPS [i].lng], STOPS [i].zoom);
      marker.openPopup();
    }

    // Pulldown Menü befüllen
    let option = document.createElement ("option");
    option.value = STOPS[i].user;
    option.text = STOPS[i].title
    if (STOPS [i].user == "pauly0602") {
      option.selected = true;
    }
    document.querySelector("#pulldown select").appendChild (option);
  }
// auf Änderungen beim Pull-down reagieren 
document.querySelector ('#pulldown select').onchange  = function (evt) {
  let url = `https://${evt.target.value }.github.io/nz`
  //console.log (evt.target.value)
  //console.log (url)
  window.location = url;
}