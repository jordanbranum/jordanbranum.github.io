var mymap = L.map('mapid', {fullscreenControl: {pseudoFullscreen: false}}).setView([51.505, -0.09], 13);

// Search Bars for the Map
  var options = {
    key: geocoder_api_key,
    limit: 10
  };
  var control = L.Control.openCageSearch(options).addTo(mymap);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{}).addTo(mymap);

// 7 Wonder of the world

//Taj Mahal
var tajimg = '<img src="images/taj-mahal.jpg" height="50px" width="50px"/>';

var tajpopup = L.popup()
  .setLatLng([27.174961, 78.042385])
  .setContent('<br><b>Taj Mahal</b></br><p>It was commissioned in 1632 by the Mughal emperor Shah Jahan (reigned from 1628 to 1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall. </p>' + tajimg);

var tajIcon = L.icon({
  iconUrl: 'images/taj-mahal.jpg',
  iconSize: [30,30]
});

  var tajmahal = L.marker(
    [27.174961, 78.042385],
    {icon: tajIcon}
  ).addTo(mymap).bindPopup(tajpopup, {closeOnClick: true});

  tajmahal.on('click', function(e){
    mymap.setView(e.latlng, 14);
    });

//Great Wall of China
  var chinaimg = '<img src = images/wall-china.jpg height="50px" width= "50px"/>';

  var chinaIcon = L.icon({
    iconUrl: 'images/wall-china.jpg',
    iconSize: [30,30]
  });

  var chinapopup = L.popup()
  .setLatLng([40.334245, 116.477652])
  .setContent('<br><b>The Great Wall of China</b></br><p>The Great Wall of China (Chinese: 萬里長城; pinyin: Wànlǐ Chángchéng) is the collective name of a series of fortification systems generally built across the historical northern borders of China to protect and consolidate territories of Chinese states and empires against various nomadic groups of the steppe and their polities.</p>' + chinaimg);

  var china = L.marker(
    [40.334245, 116.477652],
    {icon: chinaIcon}
  ).addTo(mymap).bindPopup(chinapopup, {closeOnClick: true});

  china.on('click', function(e){
    mymap.setView(e.latlng, 14);
    });

// Petra of Jordan
  var jordanimg = '<img src = images/petra-jordan.jpg height="50px" width= "50px"/>';

  var jordanIcon = L.icon({
    iconUrl: 'images/petra-jordan.jpg',
    iconSize: [30,30]
  });

  var jordanpopup = L.popup()
  .setLatLng([40.334245, 116.477652])
  .setContent('<br><b>Pertra of Jordan</b></br><p>The Nabataeans were nomadic Arabs who invested in Petras proximity to the trade routes by establishing it as a major regional trading hub.</p>' + jordanimg);

  var jordan = L.marker(
    [30.328611, 35.441944],
    {icon: jordanIcon}
  ).addTo(mymap).bindPopup(jordanpopup, {closeOnClick: true});

  jordan.on('click', function(e){
    mymap.setView(e.latlng, 14);
    });

//Christ of Brazil
  var brazilimg = '<img src = images/brazil-christ.jpg height="50px" width= "50px"/>';

  var brazilIcon = L.icon({
    iconUrl: 'images/brazil-christ.jpg',
    iconSize: [30,30]
  });

  var brazilpopup = L.popup()
  .setLatLng([-22.951389, -43.2108334])
  .setContent('<br><b>Christ teh Redeemer</b></br><p>The statue weighs 635 metric tons (625 long, 700 short tons), and is located at the peak of the 700-metre (2,300 ft) Corcovado mountain in the Tijuca Forest National Park overlooking the city of Rio de Janeiro. A symbol of Christianity across the world, the statue has also become a cultural icon of both Rio de Janeiro and Brazil</p>' + brazilimg);

  var brazil = L.marker(
    [-22.951389, -43.2108334],
    {icon: brazilIcon}
  ).addTo(mymap).bindPopup(brazilpopup, {closeOnClick: true});

  brazil.on('click', function(e){
    mymap.setView(e.latlng, 14);
    });

//Machu pecchue
  var peruimg = '<img src = images/machu-picchu.jpg height="50px" width= "50px"/>';

  var peruIcon = L.icon({
    iconUrl: 'images/machu-picchu.jpg',
    iconSize: [30,30]
  });

  var perupopup = L.popup()
  .setLatLng([-13.163056, -72.545556])
  .setContent('<br><b>Machu Picchu</b></br><p>Machu Picchu was constructed as an estate for the Inca emperor Pachacuti (1438–1472). Often mistakenly referred to as the "Lost City of the Incas", it is the most familiar icon of Inca civilization. The Incas built the estate around 1450 but abandoned it a century later at the time of the Spanish conquest</p>' + peruimg);

  var peru = L.marker(
    [-13.163056, -72.545556],
    {icon: peruIcon}
  ).addTo(mymap).bindPopup(perupopup, {closeOnClick: true});

  peru.on('click', function(e){
    mymap.setView(e.latlng, 14);
    });

//Mexico pymirds
  var mexicoimg = '<img src = images/mexico-chichen.jpg height="50px" width= "50px"/>';

  var mexicoIcon = L.icon({
    iconUrl: 'images/mexico-chichen.jpg',
    iconSize: [30,30]
  });

  var mexicopopup = L.popup()
  .setLatLng([20.682778, -88.569167])
  .setContent('<br><b>Chichen Itza</b></br><p>Chichen Itza was one of the largest Maya cities and it was likely to have been one of the mythical great cities, or Tollans, referred to in later Mesoamerican literature.[2] The city may have had the most diverse population in the Maya world, a factor that could have contributed to the variety of architectural styles at the site</p>' + mexicoimg);

  var mexico = L.marker(
    [20.682778, -88.569167],
    {icon: mexicoIcon}
  ).addTo(mymap).bindPopup(mexicopopup, {closeOnClick: true});

  mexico.on('click', function(e){
    mymap.setView(e.latlng, 14);
    });
//Rome
  var romeimg = '<img src = images/colosseum-roma.jpg height="50px" width= "50px"/>';

  var romeIcon = L.icon({
    iconUrl: 'images/colosseum-roma.jpg',
    iconSize: [30,30]
  });

  var romepopup = L.popup()
  .setLatLng([41.890169, 12.492269])
  .setContent('<br><b>Rome Colosseum</b></br><p>The Colosseum could hold an estimated 50,000 to 80,000 spectators during phases of its various renovations over the centuries,[5][6] having an average audience of some 65,000;[7][8] it was used for gladiatorial contests and public spectacles such as mock sea battles (for only a short time as the hypogeum was soon filled in with mechanisms to support the other activities), animal hunts, executions, re-enactments of famous battles.</p>' + romeimg);


  var rome = L.marker(
    [41.890169, 12.492269],
    {icon: romeIcon}
  ).addTo(mymap).bindPopup(romepopup, {closeOnClick: true});

  rome.on('click', function(e){
    mymap.setView(e.latlng, 14);
    });


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

//mymap.addControl(new L.Control.fullscreen());
