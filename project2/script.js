var mymap= L.map('map').setView([-5.166171, 119.460729],10),
	marker= L.marker([-5.166171,  119.460729]).addTo(mymap),
    popup = L.popup(),	
	circle = L.circle([-5.166171, 119.460729], {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5,
			radius: 500
		}).addTo(mymap),
	polygon = L.polygon([
		[-5.166171, 119.460729],
		[-5.251900, 119.527551],
		[-5.150203, 119.434968]
	 ]).addTo(mymap);


	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
   		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
   		maxZoom: 18,
   		id: 'mapbox.streets',
   		accessToken: 'pk.eyJ1IjoiYWludXJyIiwiYSI6ImNqbTM2bXNsZDFpaXczdnBhaXNuazk5NmgifQ.8gVKy0ASujHRypz03IgNVg'
	}).addTo(mymap);

	marker.bindPopup("ainur di sini!").openPopup();


	

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);
