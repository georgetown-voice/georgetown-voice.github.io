
//initialize the map, get the tiles from mapbox with Alex Lewontin's token

function initializeMap(lat, long, zoom)
{
    var mymap = L.map('mapid').setView([lat, long], zoom);
            
    L.tileLayer('https://api.mapbox.com/styles/v1/alexclewontin/cjercgc6y67en2snxyb8qm2su/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxleGNsZXdvbnRpbiIsImEiOiJjamVxcDE3c28wNnkwMnFteXcyZnlwZHR2In0.ibNOkvue-_GppjJdUEhQKg', 
    {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        accessToken: 'pk.eyJ1IjoiYWxleGNsZXdvbnRpbiIsImEiOiJjamVxcDE3c28wNnkwMnFteXcyZnlwZHR2In0.ibNOkvue-_GppjJdUEhQKg'
    }).addTo(mymap);
}


//define the relevant class

class mapPin {
    constructor(title, author, imageAddress, copy, lat, long) 
    {
        mapPin.instances.push(this);
        this.title = title;
        this.author = author;
        this.image = imageAddress;
        this.copy = copy;
        this.mapMarker = L.marker([lat, long], {riseOnHover: true, opacity: .5}).addTo(mymap);
    }

}

mapPin.instances = [];

mapPin.on('mouseover', function(e)
{

    changePost(this);
    for(i = 0; i < mapPin.instances.length; i++)
    {
        mapPin.instances[i].setOpacity(.5);
        this.setOpacity(1.0);
    }

})

function changePost(mapPin)
{
    
    $.get('mappyTemplate.mst', function(template){
    //var template = $('#template').html();
    Mustache.parse(template);
    var output = Mustache.render(template, mapPin);
    $("#target").html(output);
    })
}