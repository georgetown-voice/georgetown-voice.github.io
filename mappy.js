
//initialize the map, get the tiles from mapbox with Alex Lewontin's token

var mymap = L.map('mapid').setView([38.907, -77.037], 13);
            
L.tileLayer('https://api.mapbox.com/styles/v1/alexclewontin/cjercgc6y67en2snxyb8qm2su/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxleGNsZXdvbnRpbiIsImEiOiJjamVxcDE3c28wNnkwMnFteXcyZnlwZHR2In0.ibNOkvue-_GppjJdUEhQKg', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    accessToken: 'pk.eyJ1IjoiYWxleGNsZXdvbnRpbiIsImEiOiJjamVxcDE3c28wNnkwMnFteXcyZnlwZHR2In0.ibNOkvue-_GppjJdUEhQKg'
}).addTo(mymap);