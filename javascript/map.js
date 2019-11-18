var mymap = L.map('mapid', {fullscreenControl: {pseudoFullscreen: false}}).setView([51.505, -0.09], 13);

// Search Bars for the Map
  var options = {
    key: geocoder_api_key,
    limit: 10
  };
  var control = L.Control.openCageSearch(options).addTo(mymap);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{}).addTo(mymap);

// 7 Wonder of the world
var seven_wonders =
[
  // Taj Mahal
  ['<img src="images/taj-mahal.jpg" height="50px" width="50px"/>',
  27.174961, 78.042385,
  '<br><b>Taj Mahal</b></br><p>It was commissioned in 1632 by the Mughal emperor Shah Jahan (reigned from 1628 to 1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall. </p>' + '<img src="images/taj-mahal.jpg" height="50px" width="50px"/>'
  ,'images/taj-mahal.jpg'
  ],
  // Great Wall of China
  ['<img src = images/wall-china.jpg height="50px" width= "50px"/>',
  40.334245, 116.477652,
  '<br><b>The Great Wall of China</b></br><p>The Great Wall of China (Chinese: 萬里長城; pinyin: Wànlǐ Chángchéng) is the collective name of a series of fortification systems generally built across the historical northern borders of China to protect and consolidate territories of Chinese states and empires against various nomadic groups of the steppe and their polities.</p>'  + '<img src = images/wall-china.jpg height="50px" width= "50px"/>'
  ,'images/wall-china.jpg'
  ],
  // Petra of Jordan
  ['<img src = images/petra-jordan.jpg height="50px" width= "50px"/>',
  30.328611, 35.441944,
  '<br><b>Pertra of Jordan</b></br><p>The Nabataeans were nomadic Arabs who invested in Petras proximity to the trade routes by establishing it as a major regional trading hub.</p>' + '<img src = images/petra-jordan.jpg height="50px" width= "50px"/>'
  ,'images/petra-jordan.jpg'
  ],
  // Christ of Brazil
  ['<img src = images/brazil-christ.jpg height="50px" width= "50px"/>',
  -22.951389, -43.2108334,
  '<br><b>Christ the Redeemer</b></br><p>The statue weighs 635 metric tons (625 long, 700 short tons), and is located at the peak of the 700-metre (2,300 ft) Corcovado mountain in the Tijuca Forest National Park overlooking the city of Rio de Janeiro. A symbol of Christianity across the world, the statue has also become a cultural icon of both Rio de Janeiro and Brazil</p>' + '<img src = images/brazil-christ.jpg height="50px" width= "50px"/>'
  ,'images/brazil-christ.jpg'
  ],
  // Machu pecchue
  ['<img src = images/machu-picchu.jpg height="50px" width= "50px"/>',
  -13.163056, -72.545556,
  '<br><b>Machu Picchu</b></br><p>Machu Picchu was constructed as an estate for the Inca emperor Pachacuti (1438–1472). Often mistakenly referred to as the "Lost City of the Incas", it is the most familiar icon of Inca civilization. The Incas built the estate around 1450 but abandoned it a century later at the time of the Spanish conquest</p>' + '<img src = images/machu-picchu.jpg height="50px" width= "50px"/>'
  ,'images/machu-picchu.jpg'
  ],
  // Mexico pyramids
  ['<img src = images/mexico-chichen.jpg height="50px" width= "50px"/>',
  20.682778, -88.569167,
  '<br><b>Chichen Itza</b></br><p>Chichen Itza was one of the largest Maya cities and it was likely to have been one of the mythical great cities, or Tollans, referred to in later Mesoamerican literature.[2] The city may have had the most diverse population in the Maya world, a factor that could have contributed to the variety of architectural styles at the site</p>' + '<img src = images/mexico-chichen.jpg height="50px" width= "50px"/>'
  ,'images/mexico-chichen.jpg'
  ],
  // Rome
  ['<img src = images/colosseum-roma.jpg height="50px" width= "50px"/>',
  41.890169, 12.492269,
  '<br><b>Rome Colosseum</b></br><p>The Colosseum could hold an estimated 50,000 to 80,000 spectators during phases of its various renovations over the centuries, having an average audience of some 65,000; it was used for gladiatorial contests and public spectacles such as mock sea battles (for only a short time as the hypogeum was soon filled in with mechanisms to support the other activities), animal hunts, executions, re-enactments of famous battles.</p>' + '<img src = images/colosseum-roma.jpg height="50px" width= "50px"/>'
  ,'images/colosseum-roma.jpg'
  ],
];

var wonder_image = [];
var wonder_popup = [];
var wonder_icon = [];
var wonder_marker = [];

for (i = 0; i <= 6; i++)
{
  wonder_image[i] = seven_wonders[i][0];
  wonder_popup[i] = 'L.popup().setLatLng([' + seven_wonders[i][1] + ',' + seven_wonders[i][2] + ']).setContent(' + seven_wonders[i][3] + ');';
  wonder_icon[i] = L.icon({ iconUrl: seven_wonders[i][4], iconSize: [30,30] });
  wonder_marker[i] = L.marker( [seven_wonders[i][1], seven_wonders[i][2]], {icon: wonder_icon[i]}).addTo(mymap).bindPopup(wonder_popup[i], {closeOnClick: true});
  wonder_marker[i].on('click', function(e){ mymap.setView(e.latlng, 14); });
}

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
