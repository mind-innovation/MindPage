function loadMap() {
           
    var mapOptions = {
       center:new google.maps.LatLng(25.5444, -103.442), 
       zoom: 10, 
       mapTypeId:google.maps.MapTypeId.ROADMAP 
    };
        
    var map = new google.maps.Map(document.getElementById("map"),mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(25.552713, -103.440674),
        map: map,
        //animation:google.maps.Animation.BOUNCE 
        animation:google.maps.Animation.Drop, 
        title:'Click to zoom'
     });

     //Zoom to 7 when clicked on marker
     google.maps.event.addListener(marker,'click',function() {
        map.setZoom(14);
        map.setCenter(marker.getPosition());

        var infowindow = new google.maps.InfoWindow({
             content:"Av Juan Alvarez 695, centro, Torreon Coahuila MX"
         });
             
         infowindow.open(map,marker);
     });

    
 }
    
 //google.maps.event.addDomListener(window, 'load', loadMap);