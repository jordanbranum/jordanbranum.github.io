var mymap = L.map('mapid').setView([51.505, -0.09], 13);

// Search Bars for the Map
  var options = {
    key: geocoder_api_key,
    limit: 10
  };
  var control = L.Control.openCageSearch(options).addTo(mymap);
  /*
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',{
    maxZoom: 18,
    id: 'mapbox.mapbox-traffic-v1',
    accessToken: mapbox_access_token
  }).addTo(mymap);
*/


  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{}).addTo(mymap);


/*
  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png',{}).addTo(mymap);
*/

// german lanague map base
/*
  L.tileLayer('https://a.tile.openstreetmap.de/{z}/{x}/{y}.png',{}).addTo(mymap);
*/
//humantarity mapbas
/*
 L.tileLayer('http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',{}).addTo(mymap);
*/
      //Example from lAB5
/*
  var marker = L.marker([51.5, -0.09]).addTo(mymap);

  var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
  }).addTo(mymap);

  var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047],
  ]).addTo(mymap);

  var polyline = L.polyline([
    [51.506, -0.08],
    [51.502, -0.06],
    [51.507, -0.047]
  ]).addTo(mymap);
*/

// 7 Wonder of the world

//Taj Mahal
var tajimg = '<img src="images/taj-mahal.jpg" height="50px" width="50px"/>';

var tajpopup = L.popup()
  .setLatLng([27.174961, 78.042385])
  .setContent('<p>It was commissioned in 1632 by the Mughal emperor Shah Jahan (reigned from 1628 to 1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall. </p>' + tajimg);

var tajIcon = L.icon({
  iconUrl: 'images/taj-mahal.jpg',
  iconSize: [30,30]
});

  var tajmahal = L.marker(
    [27.174961, 78.042385],
    {icon: tajIcon}
  ).addTo(mymap).bindPopup(tajpopup, {closeOnClick: true});


//Great Wall of China
  var china = L.marker(
    [40.334245, 116.477652]
  ).addTo(mymap);


// Petra of Jordan
  var jordan = L.marker(
    [30.328611, 35.441944]
  ).addTo(mymap);


//Christ of Brazil
  var brazil = L.marker(
    [-22.951389, -43.2108334]
  ).addTo(mymap);


//Machu pecchue
  var peru = L.marker(
    [-13.163056, -72.545556]
  ).addTo(mymap);


//Mexico pymirds
  var mexico = L.marker(
    [20.682778, -88.569167]
  ).addTo(mymap);


//Rome
  var rome = L.marker(
    [41.890169, 12.492269]
  ).addTo(mymap);

//Add pop window to all three add features and dynamic zooming
  //marker.bindPopup("<b>Hello World!</b><br>I am a popup.").openPopup();
  //circle.bindPopup("I am a cirlce.");
  //polygon.bindPopup("I am a polygon.");

//Functions that zoom in on the created polygons
/*
  marker.on('click', function(e){
    mymap.setView(e.latlng, 14);
    });
  circle.on('click', function(e){
    mymap.setView(e.latlng, 13);
    });
  polygon.on('click', function(e){
    mymap.setView(e.latlng, 13);
  });
*/

 var ZoomViewer = L.Control.extend({
   onAdd: function(){
     var gauge = L.DomUtil.create('div');
     gauge.style.width = '200px';
     gauge.style.background = 'rgba(255,255,255,0.5)';
     gauge.style.textAlign = 'left';
     mymap.on('zoomstart zoom zoomend', function(ev){
       gauge.innerHTML = 'Zoom level:' + mymap.getZoom();
     })
     return gauge;
   }
 });

 (new ZoomViewer).addTo(mymap);

 mymap.setView([0,0], 1);
