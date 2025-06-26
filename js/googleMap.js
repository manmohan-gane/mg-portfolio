//var map, placesList;

// function initialize() {
//
//   var pyrmont = new google.maps.LatLng(19.0097196,73.1011804);
//
//   map = new google.maps.Map(document.getElementById('googleMap'), {
//     center: pyrmont,
//     zoom: 17
//   });
//
//   var request = {
//     location: pyrmont,
//     radius: 500,
//     types: ['store']
//   };
//
//   placesList = document.getElementById('places');
//
//   var service = new google.maps.places.PlacesService(map);
//   service.nearbySearch(request, callback);
// }
//
// google.maps.event.addDomListener(window, 'load', initialize);

function myMap() {
var myCenter = new google.maps.LatLng(19.009323, 73.101044);
var mapProp = {center:myCenter, zoom:17, scrollwheel:false, draggable:false, mapTypeId:google.maps.MapTypeId.ROADMAP};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
var marker = new google.maps.Marker({position:myCenter});
marker.setMap(map);
}
