function initMap() {
  // Latitude and Longitude
  var myLatLng = { lat: -11.9758866, lng: -77.0557144 };

  var map = new google.maps.Map(document.getElementById("google-maps"), {
    zoom: 17,
    center: myLatLng,
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Lima, Peru", // Title Location
  });
}
