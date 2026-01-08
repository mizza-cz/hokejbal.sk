google.maps.event.addDomListener(window, "load", initMap);

function initMap() {
  let mapOptions = {
    zoom: 8,

    center: new google.maps.LatLng(50.0595854, 14.3255421),

    styles: MAP_STYLES,
  };

  let mapElement = document.getElementById("map-canvas");
  let map = new google.maps.Map(mapElement, mapOptions);

  const iconBase = "images/ico/";
  const icons = {
    info: {
      icon: {
        url: iconBase + "pin.svg",
        scaledSize: new google.maps.Size(48, 48), // Adjust the size as needed
      },
    },
  };

  for (let i = 0; i < points.length; i++) {
    const marker = new google.maps.Marker({
      position: points[i].position,
      icon: icons[points[i].type].icon,
      label: {
        text: points[i].number,
        color: "white",
        fontSize: "14px",
        fontWeight: "semibold",
      },
      map: map,
    });
  }
}
const MAP_STYLES = [
  { elementType: "geometry", stylers: [{ color: "#5f7f73" }] },

  { elementType: "labels.text.fill", stylers: [{ color: "#1b2b28" }] },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#7fa59a" }, { weight: 2 }],
  },

  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{ color: "#5b7a6f" }],
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry",
    stylers: [{ color: "#56766b" }],
  },

  {
    featureType: "administrative.country",
    elementType: "geometry.stroke",
    stylers: [{ color: "#000000" }, { weight: 1.2 }],
  },

  {
    featureType: "administrative.province",
    elementType: "geometry.stroke",
    stylers: [{ color: "#2b3f3a" }, { weight: 1 }],
  },

  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#2e4b57" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#1b2b28" }],
  },

  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#4a6a78" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#2b3f3a" }, { weight: 1 }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#1b2b28" }],
  },

  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#3f6275" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1c2e36" }, { weight: 1.2 }],
  },

  { featureType: "poi", stylers: [{ visibility: "off" }] },
];

const points = [
  {
    position: new google.maps.LatLng(50.0851133, 14.5785705),
    type: "info",
    number: "30",
  },
  {
    position: new google.maps.LatLng(49.2208457, 16.6536349),
    type: "info",
    number: "16",
  },
  {
    position: new google.maps.LatLng(49.2276272, 17.6703409),
    type: "info",
    number: " ",
  },
  {
    position: new google.maps.LatLng(49.2034397, 17.541245),
    type: "info",
    number: "3",
  },
];
