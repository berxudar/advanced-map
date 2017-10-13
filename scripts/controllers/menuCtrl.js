app.controller("menuCtrl", function ($scope, $sahtejson, $rootScope, $mdToast, $timeout, $mdDialog,$leafletFonk) {
    $scope.lang = $rootScope.lang;
    $scope.il = $sahtejson.il;
    $scope.ilce = $sahtejson.ilce;
    $scope.mahalle = $sahtejson.mahalle;
    $scope.yol = $sahtejson.yol;
    $scope.numarataj = $sahtejson.numarataj;
    $scope.filterIlce = $rootScope.adress.filterIlce;
    $scope.filterMahalle = $rootScope.adress.filterMahalle;
    $scope.filterYol = $rootScope.adress.filterYol;
    $scope.filterNumarataj = $rootScope.adress.filterNumarataj;
    $scope.isActiveIlce = $rootScope.adress.ilceActive;
    $scope.isActiveMahalle = $rootScope.adress.mahalleActive;
    $scope.isActiveYol = $rootScope.adress.yolActive;
    $scope.isActiveNumarataj = $rootScope.adress.kapiActive;
    $scope.featureIl = $rootScope.adress.featureIl;
    $scope.featureIlce = $rootScope.adress.featureIlce;
    $scope.featureMahalle = $rootScope.adress.featureMahalle;
    $scope.featureYol = $rootScope.adress.featureYol;
    $scope.featureKapi = $rootScope.adress.featureKapi;
    $scope.secilenIl = $rootScope.adress.il;
    $scope.secilenIlce = $rootScope.adress.ilce;
    $scope.secilenMahalle = $rootScope.adress.mahalle;
    $scope.secilenYol = $rootScope.adress.yol;
    $scope.secilenKapi = $rootScope.adress.kapi;
    $scope.pharmacyName = $rootScope.pharmacy.pharmacyName;
    $scope.dutyPharmayControl = $rootScope.pharmacy.dutyPharmayControl;
    $scope.pharmacySearchResults = $rootScope.pharmacy.pharmacySearchResults;
    $scope.parcellLandNo = $rootScope.parcell.parcellLandNo;
    $scope.parcellNo = $rootScope.parcell.parcellNo;
    $scope.parcellSearchResults = $rootScope.parcell.parcellSearchResults;
    $scope.taxiName = $rootScope.taxi.taxiName;
    $scope.taxiSearchResults = $rootScope.taxi.taxiSearchResults;
    $scope.buildOwnerName = $rootScope.buildLicense.buildOwnerName;
    $scope.buildConstName = $rootScope.buildLicense.buildConstName;
    $scope.buildTypes = [
        {value: 1, text: "Anıt"},
        {value: 2, text: "Cami"},
        {value: 3, text: "Çeşme"},
        {value: 4, text: "Darül Hüffaz"},
        {value: 5, text: "Diğer"},
        {value: 6, text: "Hamam"},
        {value: 7, text: "Han"},
        {value: 8, text: "Kamu"},
        {value: 9, text: "Kilise"},
        {value: 10, text: "Kütüphane"},
        {value: 11, text: "Medrese"},
        {value: 12, text: "Mevlana"},
        {value: 13, text: "Müze"},
        {value: 14, text: "Şehitlik"},
        {value: 15, text: "Türbe"},
    ];


    $scope.setParcellLandNo = function () {
        $rootScope.parcell.parcellLandNo = $scope.parcellLandNo;
    };
    $scope.setParcellNo = function () {
        $rootScope.parcell.parcellNo = $scope.parcellNo;
    };
    $scope.setPharmacyName = function () {
        $rootScope.pharmacy.pharmacyName = $scope.pharmacyName;
    };
    $scope.setPharmacyDutyControl = function () {
        $rootScope.pharmacy.dutyPharmayControl = $scope.dutyPharmayControl;
    };
    $scope.setTaxiName = function () {
        $rootScope.taxi.taxiName = $scope.taxiName;
    };
    $scope.setOwnerName = function () {
        $rootScope.buildLicense.buildOwnerName = $scope.buildOwnerName;
    };
    $scope.setBuilderName = function () {
        $rootScope.buildLicense.buildConstName = $scope.buildConstName;
    };


    $scope.cancel = function () {
        $mdToast.hide();

        $timeout(function () {
            angular.element(document.querySelector("#menus")).triggerHandler("click");
        }, 10);

    };


    $scope.changeIlce = function (ilid) {

        $scope.filterIlce = {};
        for (i in $scope.il) {
            if (ilid == $scope.il[i].id) {
                $rootScope.adress.il = $scope.il[i].id;
                $scope.secilenIl = $rootScope.adress.il;
                $rootScope.adress.ilceActive = true;
                if ($scope.featureIl !== false) {
                    $scope.featureIl.remove();
                    $scope.featureIl = false;
                    $rootScope.adress.featureIl = false;
                }
                $scope.featureIl = L.geoJSON($scope.il[i].geojson, {
                    style: {color: "#ff0000"}
                }).bindPopup($scope.il[i].label).addTo($rootScope.leaflet);
                $rootScope.adress.featureIl = $scope.featureIl;
                var ilbbox = $scope.featureIl.getBounds();
                $rootScope.leaflet.fitBounds(ilbbox);
                $scope.isActiveIlce = true;
            }
        }
        for (i in $scope.ilce) {
            if (ilid == $scope.ilce[i].ilid) {
                $scope.filterIlce[i] = $scope.ilce[i];
                $rootScope.adress.filterIlce[i] = $scope.ilce[i];
            }
        }
    };
    $scope.changeMahelle = function (ilceid) {

        $scope.filterMahalle = {};
        for (i in $scope.ilce) {
            if (ilceid == $scope.ilce[i].id) {
                $rootScope.adress.ilce = $scope.ilce[i].id;
                $scope.secilenIlce = $rootScope.adress.ilce;
                $rootScope.adress.mahalleActive = true;
                if ($scope.featureIl !== false) {
                    $scope.featureIl.remove();
                    $scope.featureIl = false;
                    $rootScope.adress.featureIl = false;
                }
                if ($scope.featureIlce !== false) {
                    $scope.featureIlce.remove();
                    $scope.featureIlce = false;
                    $rootScope.adress.featureIlce = false;
                }
                $scope.featureIlce = L.geoJSON($scope.ilce[i].geojson, {
                    style: {color: "#ffff00"}
                }).bindPopup($scope.ilce[i].label).addTo($rootScope.leaflet);
                $rootScope.adress.featureIlce = $scope.featureIlce;
                var ilcebbox = $scope.featureIlce.getBounds();
                $rootScope.leaflet.fitBounds(ilcebbox);
                $scope.isActiveMahalle = true;
            }
        }

        $scope.mahalle = $sahtejson.mahalle;
        for (i in $scope.mahalle) {
            if (ilceid == $scope.mahalle[i].ilceid) {
                $scope.filterMahalle[i] = $scope.mahalle[i];
                $rootScope.adress.filterMahalle[i] = $scope.mahalle[i];
            }
        }


    }


    $scope.changeYol = function (mahalleid) {
        $scope.filterYol = {};
        for (i in $scope.mahalle) {
            if (mahalleid == $scope.mahalle[i].id) {
                $rootScope.adress.mahalle = $scope.mahalle[i].id;
                $scope.secilenMahalle = $rootScope.adress.mahalle;
                $rootScope.adress.yolActive = true;
                if ($scope.featureIl !== false) {
                    $scope.featureIl.remove();
                    $scope.featureIl = false;
                    $rootScope.adress.featureIl = false;
                }
                if ($scope.featureIlce !== false) {
                    $scope.featureIlce.remove();
                    $scope.featureIlce = false;
                    $rootScope.adress.featureIlce = false;
                }
                if ($scope.featureMahalle !== false) {
                    $scope.featureMahalle.remove();
                    $scope.featureMahalle = false;
                    $rootScope.adress.featureMahalle = false;
                }
                $scope.featureMahalle = L.geoJSON($scope.mahalle[i].geojson, {
                    style: {color: "#ff00ff"}
                }).bindPopup($scope.mahalle[i].label).addTo($rootScope.leaflet);
                $rootScope.adress.featureMahalle = $scope.featureMahalle;
                var mahallebbox = $scope.featureMahalle.getBounds();
                $rootScope.leaflet.fitBounds(mahallebbox);
                $scope.isActiveYol = true;
            }
        }
        $scope.yol = $sahtejson.yol;
        for (i in $scope.yol) {
            if (mahalleid == $scope.yol[i].mahalleid) {

                $scope.filterYol[i] = $scope.yol[i];
                $rootScope.adress.filterYol[i] = $scope.yol[i];

            }
        }
    }


    $scope.changeKapiNo = function (yolid) {
        debugger;
        $scope.filterNumarataj = {};
        for (i in $scope.yol) {
            if (yolid == $scope.yol[i].id) {
                $rootScope.adress.yol = $scope.yol[i].id;
                $scope.secilenYol = $rootScope.adress.yol;
                $rootScope.adress.kapiActive = true;
                if ($scope.featureIl !== false) {
                    $scope.featureIl.remove();
                    $scope.featureIl = false;
                    $rootScope.adress.featureIl = false;
                }
                if ($scope.featureIlce !== false) {
                    $scope.featureIlce.remove();
                    $scope.featureIlce = false;
                    $rootScope.adress.featureIlce = false;
                }
                if ($scope.featureMahalle !== false) {
                    $scope.featureMahalle.remove();
                    $scope.featureMahalle = false;
                    $rootScope.adress.featureMahalle = false;
                }
                if ($scope.featureYol !== false) {
                    $scope.featureYol.remove();
                    $scope.featureYol = false;
                    $rootScope.adress.featureYol = false;
                }
                $scope.featureYol = L.geoJSON($scope.yol[i].geojson, {
                    style: {color: "#ff00ff"}
                }).bindPopup($scope.yol[i].label).addTo($rootScope.leaflet);
                $rootScope.adress.featureYol = $scope.featureYol;
                var yolbbox = $scope.featureYol.getBounds();
                $rootScope.leaflet.fitBounds(yolbbox);
                $scope.isActiveNumarataj = true;
            }
        }
        $scope.numarataj = $sahtejson.numarataj;
        for (i in $scope.numarataj) {
            if (yolid == $scope.numarataj[i].yolid) {
                $scope.filterNumarataj[i] = $scope.numarataj[i];
                $rootScope.adress.filterNumarataj[i] = $scope.numarataj[i];

            }
        }
    }

    $scope.showKapiNo = function (numaratajid) {

        for (i in $scope.numarataj) {
            if (numaratajid == $scope.numarataj[i].id) {
                $scope.secilenKapi = $scope.numarataj[i].id;
                $rootScope.adress.kapi = $scope.numarataj[i].id;
                if ($scope.featureIl !== false) {
                    $scope.featureIl.remove();
                    $scope.featureIl = false;
                    $rootScope.adress.featureIl = false;
                }
                if ($scope.featureIlce !== false) {
                    $scope.featureIlce.remove();
                    $scope.featureIlce = false;
                    $rootScope.adress.featureIlce = false;
                }
                if ($scope.featureMahalle !== false) {
                    $scope.featureMahalle.remove();
                    $scope.featureMahalle = false;
                    $rootScope.adress.featureMahalle = false;
                }
                if ($scope.featureYol !== false) {
                    $scope.featureYol.remove();
                    $scope.featureYol = false;
                    $rootScope.adress.featureYol = false;
                }
                if ($scope.featureKapi !== false) {
                    $scope.featureKapi.remove();
                    $scope.featureKapi = false;
                    $rootScope.adress.featureKapi = false;
                }
                $scope.featureKapi = L.geoJSON($scope.numarataj[i].geojson, {
                    style: {color: "#ff00ff"}
                }).bindPopup($scope.numarataj[i].label).addTo($rootScope.leaflet);
                $rootScope.adress.featureKapi = $scope.featureKapi;
                var yolbbox = $scope.featureKapi.getBounds();
                $rootScope.leaflet.fitBounds(yolbbox);

            }
        }
    }


    $scope.close = function () {
        $mdDialog.cancel();
    };

    debugger;
    $scope.measureLines = $rootScope.measureLines || [{name:"1. Measure Line",id:1,latlng:[],latlngs:[],feature:false,show:true}];
    $rootScope.measureLines=$rootScope.measureLines || $scope.measureLines;
    $scope.measureCalc=$rootScope.measureCalc || 0;
    $scope.measureName = $scope.measureLines[$scope.measureCalc].name;
    $scope.measureLineLatLng = $scope.measureLines[$scope.measureCalc].latlng || [];

    $scope.sayi =  $rootScope.measureLineLatLngLenght || 1;

    $scope.setMeasureName=function () {
        $scope.measureLines[$scope.measureCalc].name = $scope.measureName;
    };
    $scope.newMeasureLine = function () {
        debugger;
        var next = $scope.measureCalc+2;
        $scope.measureCalc=next-1;
        $scope.measureLines.push({name:next+". Measure Line",id:next,latlng:[],latlngs:[],feature:false,show:true});
        $scope.measureName=next+". Measure Line";
        $rootScope.measureLines=$scope.measureLines;
        $rootScope.measureCalc=$scope.measureCalc;
        $scope.measureLineLatLng = $scope.measureLines[$scope.measureCalc].latlng || [];
        $scope.sayi = $scope.measureLineLatLng.length+1;
        $rootScope.measureLineLatLngLenght=$scope.sayi;
        $scope.lng="";
        $scope.lat="";
    };

    $scope.addLatLngToLine = function (lng, lat) {
        debugger;
        if (lng != null && lat!=null) {
            $scope.measureLines[$scope.measureCalc].latlng.push({sayi: $scope.sayi, lng: lng, lat: lat});
            $scope.measureLines[$scope.measureCalc].latlngs.push([lat,lng]);
            $rootScope.measureLines = $scope.measureLines;
            $scope.sayi += 1;
            $rootScope.measureLineLatLngLenght=$scope.sayi;
            var measureLine = L.polyline($scope.measureLines[$scope.measureCalc].latlng, {color: 'green'});
            if($scope.measureLines[$scope.measureCalc].feature==false){
                $scope.measureLines[$scope.measureCalc].feature =measureLine;
                measureLine.addTo($rootScope.leaflet);

            }else{
                $scope.measureLines[$scope.measureCalc].feature.remove();
                $scope.measureLines[$scope.measureCalc].feature =measureLine;
                measureLine.addTo($rootScope.leaflet);
            }



        }else{
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('uyarı')
                    .textContent('Lütfen Enlem & Boylam Bilgilerini Giriniz')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Anladım!')
                    .targetEvent(event)
            );
        }



    };
    $scope.removeLatLngToLine = function (i) {
        console.log($scope.measureLineLatLng);
        $scope.measureLineLatLng.splice(i, 1);
        var measureLine = L.polyline($scope.measureLines[$scope.measureCalc].latlng, {color: 'green'});
        if($scope.measureLines[$scope.measureCalc].feature==false){
            $scope.measureLines[$scope.measureCalc].feature =measureLine;
            measureLine.addTo($rootScope.leaflet);

        }else{
            $scope.measureLines[$scope.measureCalc].feature.remove();
            $scope.measureLines[$scope.measureCalc].feature =measureLine;
            measureLine.addTo($rootScope.leaflet);
        }

    };

    $scope.lngControl = function (ind,lng) {
        debugger;
        if(lng=="" || lng==null){lng="";}
        if (lng>=-180 && lng<=180) {
            lng=parseFloat(lng);
            if(ind==null){
                $scope.lng=lng;
            }else{
                $scope.measureLineLatLng[ind].lng=lng;
            }

        }else{
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('uyarı')
                    .textContent('Enlem değeri +90 ve -90 değeri arasında olmalı')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Anladım!')
                    .targetEvent(event)
            );
            if(ind==null){
                $scope.lng="";
            }else{
                $scope.measureLineLatLng[ind].lng=0;
            }
        }
    };
    
    
    $scope.latControl=function (ind,lat) {
        debugger;
        if(lat=="" || lat==null){lat="";}
        if (lat>=-90 && lat<=90) {
            lat=parseFloat(lat);
            if(ind==null){
                $scope.lat=lat;
            }else{
                $scope.measureLineLatLng[ind].lat=lat;
            }
        }else{
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('uyarı')
                    .textContent('Enlem değeri +90 ve -90 değeri arasında olmalı')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Anladım!')
                    .targetEvent(event)
            );
            if(ind==null){
                $scope.lat="";
            }else{
                $scope.measureLineLatLng[ind].lat=0;
            }
        }
    }

    $scope.readyGetPoint=function(a,b){
        $rootScope.leaflet.on("click",function (e) {
            $rootScope.clickLat = e.latlng.lat;
            $rootScope.clickLng = e.latlng.lng;
            $scope.lng=e.latlng.lng;
            $scope.lat=e.latlng.lat;
            $scope.addLatLngToLine($scope.lng,$scope.lat);
        });
    };

});