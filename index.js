// import { Loader } from "@googlemaps/js-api-loader"

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    // Centered on Tamusa
    center: { lat: 29.365774, lng: -98.54748 },
    zoom: 12,
  });
}

// const loader = new Loader({
//   apiKey: "KEY goes here",
//   version: "weekly"
// });

// loader.load().then(() => {
//   map = new google.maps.Map(document.getElementById("map"), {
//     // Centered on Tamusa
//     center: { lat: 29.365774, lng: -98.54748 },
//     zoom: 12
//   });
// });
