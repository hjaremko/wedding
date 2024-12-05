// Initialize and add the map
let map;

async function initMap() {
    // The location of Hotel Saski
    const position = {lat: 50.063, lng: 19.937};
    // Request needed libraries.
    //@ts-ignore
    const {Map} = await google.maps.importLibrary("maps");
    const {AdvancedMarkerElement} = await google.maps.importLibrary("marker");

    // The map, centered at Uluru
    map = new Map(document.getElementById("map"), {
        zoom: 15,
        center: position,
        mapId: "DEMO_MAP_ID",
    });

    // The marker, positioned at Hotel Saski
    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Hotel Saski",
    });
}

initMap();
