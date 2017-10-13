"use strict";
app.factory("$leafletFonk",function ($rootScope,$fonks,$leftmenujson) {


    this.showMap = function (tileLayer) {
        var adress = $fonks.findLeftBottomLayerBoxLayer($leftmenujson.jsonData,tileLayer);
        var data = adress.data;
        var tileOptions = data.leafletMap;
        var mapOpt = {};
        var mapUrl = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
        if(typeof tileOptions.subdomains !== "undefined"){
            mapOpt.subdomains = tileOptions.subdomains
        }
        if(typeof tileOptions.maxZoom !== "undefined"){
            mapOpt.maxZoom = tileOptions.maxZoom
        }
        if(typeof tileOptions.attribution.tr !== "undefined"){
            mapOpt.attribution = tileOptions.attribution[$rootScope.language]
        }
        if(typeof tileOptions.url !== "undefined"){
            mapUrl = tileOptions.url
        }
        $rootScope.mevcutHarita = L.tileLayer(mapUrl, mapOpt).addTo($rootScope.leaflet);
        $rootScope.mevcutHarita.setOpacity(parseFloat(data.opacity));
    };

    this.createMap = function (lat, lng) {
        $rootScope.L=L;
        $rootScope.leaflet = L.map('map', {zoomControl: false});
        $rootScope.leaflet.setView([lng, lat],7);
        $rootScope.leaflet.on("click",function (e) {
            $rootScope.clickLat = e.latlng.lat;
            $rootScope.clickLng = e.latlng.lng;
        });

        $rootScope.mevcutHarita = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
            attribution:$rootScope.lang.general.leafletAttr
        }).addTo($rootScope.leaflet);


       /* L.marker([lat, lng]).addTo($rootScope.leaflet)
            .bindPopup($rootScope.ad + '<br> Easily customizable.')
            .openPopup();
        $rootScope.leaflet.on('contextmenu', function (e) {

            $rootScope.leaflet.rightClickLatLng = {lat: e.latlng.lat, lng: e.latlng.lng};
            $rootScope.streetWievImgSrc = 'https://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + e.latlng.lat + ',' + e.latlng.lng + '&heading=0.78&pitch=0&key=AIzaSyDHae8ceqSKf-LhFW8rgswJ6UfOmxdF_Zk';
        });*/
    };
    return this;
});