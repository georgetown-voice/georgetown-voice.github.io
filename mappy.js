
//initialize the map, get the tiles from mapbox with Alex Lewontin's token

function initialize_map()
{
    var lat = intialize_attribute_handler.lat;
    var long = initialize_attribute_handler.long;
    var zoom = initialize_attribute_handler.zoom;

    var mymap = L.map('mapid').setView([lat, long], zoom);
            
    L.tileLayer('https://api.mapbox.com/styles/v1/alexclewontin/cjercgc6y67en2snxyb8qm2su/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxleGNsZXdvbnRpbiIsImEiOiJjamVxcDE3c28wNnkwMnFteXcyZnlwZHR2In0.ibNOkvue-_GppjJdUEhQKg', 
    {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        accessToken: 'pk.eyJ1IjoiYWxleGNsZXdvbnRpbiIsImEiOiJjamVxcDE3c28wNnkwMnFteXcyZnlwZHR2In0.ibNOkvue-_GppjJdUEhQKg'
    }).addTo(mymap);
}


//define the relevant class

class map_pin {
    constructor(title, author, image_address, lat, long, copy) 
    {
        map_pin.instances.push(this);
        this.title = title;
        this.author = author;
        this.image_address = image_address;
        this.copy = copy;
        this.map_marker = L.marker([lat, long], {riseOnHover: true, opacity: .5}).addTo(mymap);
        this.on('mouseover', function(e)
        {
            $.get('mappy_template.mst', function(template){
                //var template = $('#template').html();
                Mustache.parse(template);
                var output = Mustache.render(template, {title : this.title, author : this.author,
                    copy : this.copy, image_address : this.image_address});
                $("#target").html(output);
            })

            for(i = 0; i < map_pin.instances.length; i++)
            {
                map_pin.instances[i].setOpacity(.5);
    
            }
            this.setOpacity(1.0);
            

        })

    }    

}

map_pin.instances = [];

