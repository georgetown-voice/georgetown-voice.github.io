    var mymap = L.map('mapid').setView([38.907, -77.037], 13);
            
            L.tileLayer('https://api.mapbox.com/styles/v1/alexclewontin/cjercgc6y67en2snxyb8qm2su/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxleGNsZXdvbnRpbiIsImEiOiJjamVxcDE3c28wNnkwMnFteXcyZnlwZHR2In0.ibNOkvue-_GppjJdUEhQKg', {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                maxZoom: 18,
                accessToken: 'pk.eyJ1IjoiYWxleGNsZXdvbnRpbiIsImEiOiJjamVxcDE3c28wNnkwMnFteXcyZnlwZHR2In0.ibNOkvue-_GppjJdUEhQKg'
            }).addTo(mymap);
            
    var bens = L.marker([38.9172, -77.0288], {riseOnHover: true, opacity: .5}).addTo(mymap),
        waves = L.marker([38.9085, -77.0694], {riseOnHover: true, opacity: .5}).addTo(mymap);
        //Add more pieces here!

    
    var bensView = {
        title: "Ben's Chili Bowl Mural",
        author: "Alex Lewontin", //this can also be replaced by an ajax request for the appropraite element
        content: $.ajax({
            url: "http://georgetownvoice.com/2018/03/17/cynthia-petkes-big-performance-propels-womens-basketball-to-wnit-second-round/",
            type: "GET",
            success: function(data){
                $("div.entrycontent").html($(data).find("div.entrycontent").html());
            }

        }),

        photo: "https://i0.wp.com/georgetownvoice.com/wp-content/uploads/2018/03/123_1-1.jpeg?w=1440",
    }

    var wavesView = {
        title: "Waves Mural",
        author: "Jorge DeNeve",
        content: "its wavy",
        photo: "https://i1.wp.com/georgetownvoice.com/wp-content/uploads/2018/03/WBB-NIT-vs-Delaware-3-16-18-6.jpg?resize=1200%2C800"
    }
    
    bens.on('mouseover', function(e)
    {

    changePost(bensView);
    
    bens.setOpacity(1.0);
    waves.setOpacity(.5);
    //list pieces here

    });



    waves.on('mouseover', function(e)
    {

    changePost(wavesView);
    
    waves.setOpacity(1.0);
    bens.setOpacity(.5);
    //list pieces here

    });

function newFunction() {
    return 'mapid';
}

    function changePost(pieceView) {
        var template = $('#template').html();
        Mustache.parse(template);
        var output = Mustache.render(template, pieceView)
        $("#target").html(output);
    }

function startBuildingThisObject() {
    {
        /*id : "id",
        location: "location",
        name: "name",
        author: "author",
        image: "image",
        copy: "copy"*/
        
    }
}
