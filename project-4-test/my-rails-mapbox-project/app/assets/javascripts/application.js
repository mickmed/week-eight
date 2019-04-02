// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require mapbox-gl
//= require_tree .


$(document).on("ready", function(){

	// write mapbox boilerplate code in here
	
	mapboxgl.accessToken = 'pk.eyJ1IjoibWlja21lZCIsImEiOiJjanFzdTJhNmwwMnMwNDNtbHRraWxwYzNmIn0.jfNg1vnqFN9DmjRY9Jj1pg';
var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
center: [-74.50, 40], // starting position [lng, lat]
zoom: 9 // starting zoom
});

});