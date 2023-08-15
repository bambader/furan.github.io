function init () {
    const saintEtienne = {
        lat: 45.43,
        lng: 4.38
    }

    const zoomLevel = 11;

    const map = L.map('mapid').setView([saintEtienne.lat, saintEtienne.lng], zoomLevel);

    // On peut ajouter l'attribut measureControl pour activer l'outil de mesure
    // const map = L.map('mapid',{measureControl: true}).setView([saintEtienne.lat, saintEtienne.lng], zoomLevel);


    const mainLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'});

    mainLayer.addTo(map);



    // Ajouter des tilelayer osmLayer
	var osmLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
	


	// Ajoutez une couche WMS de la carte de l'Ã©tat major de l'IGN
	var etatmajor = L.tileLayer.wms('https://wxs.ign.fr/cartes/geoportail/r/wms', {
		layers: 'GEOGRAPHICALGRIDSYSTEMS.ETATMAJOR40',
		format: 'image/png',
		transparent: true,
		attribution: 'IGN'
	}).addTo(map);
	// Ajoutez une couche WMS des photographies aeriennesnhistoriques de 1950-1965
	var photoaerienne = L.tileLayer.wms('https://wxs.ign.fr/orthohisto/geoportail/r/wms', {
		layers: 'ORTHOIMAGERY.ORTHOPHOTOS.1950-1965',
		format: 'image/png',
		transparent: true,
		attribution: 'IGN'
	}).addTo(map);
	// Ajoutez une couche WMS de la carte de Cassini tiré du site SOGEFI
	var cassini = L.tileLayer.wms('https://ws.sogefi-web.com/wms?', {
		layers: 'Carte_Cassini',
		format: 'image/png',
		transparent: true,
		attribution: 'IGN'
	}).addTo(map);

	var wmsLayer = L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
    layers: 'TOPO-OSM-WMS'
	}).addTo(map);
	
	
	// Ajouter GoogleHybrid 

	var	googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
		maxZoom: 20,
		subdomains:['mt0','mt1','mt2','mt3']
		}).addTo(map);
		
	// Ajouter une image Google sat
	
		googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
		maxZoom: 20,
		subdomains:['mt0','mt1','mt2','mt3']
		}).addTo(map);
    
    // Ajouter les cartes géoréférencé et stocké dans arcgis online
     // var etape_plan =  L.tileLayer('https://tiles.arcgis.com/tiles/8uevmRlLsZdoxHk8/arcgis/rest/services/tile_package/MapServer',{
        // // maxZoom: 50
     // }).addTo(map);
	 
	// const apiKey = "AAPK65763c7a6bf4441193a660f185668d06OSx4X6YwDKcZF3PqzLP43TucpV9WI-_dv6t6FuFQk_3FIhI64QCp6BmGjRrMKH5O";
	 
	// var atlas = L.esri.tiledMapLayer({
	  // url: "https://tiles.arcgis.com/tiles/8uevmRlLsZdoxHk8/arcgis/rest/services/tile_package/MapServer",
	  // apiKey: apiKey,
	 // }).addTo(map);‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍

		
		// var bati = L.esri.featureLayer({
		//   url: "https://services2.arcgis.com/8uevmRlLsZdoxHk8/arcgis/rest/services/Batiment/FeatureServer/0",
		//   style: function () {
        //      return { color: "blue", weight: 2 };
        //    }
		// }).addTo(map);
	 
	 
	
     var myIcon = L.icon({
        iconUrl: 'img/location.png',
        iconSize: [20, 40]
    });
    
    //**************************************************************

    // GEOSERVER

    //*************************************************************
    
    // Web-Map-Service (WMS) Request


    //  var atlas = L.tileLayer.wms("https://tiles.arcgis.com/tiles/8uevmRlLsZdoxHk8/arcgis/rest/services/tile_package_plan/MapServer", {
	// 	layers: "tile_package_plan",
	// 	format: 'image/png',
	// 	transparent: true,
	// 	 }).addTo(map); 

    // var atlas = L.tileLayer('https://tiles.arcgis.com/tiles/8uevmRlLsZdoxHk8/arcgis/rest/services/tile_package_plan/MapServer/tile/{z}/{y}/{x}', {
    //         attribution: '© ArcGIS Online'
    //     }).addTo(map);

    // var COUV = L.tileLayer('https://tiles.arcgis.com/tiles/8uevmRlLsZdoxHk8/arcgis/rest/services/furan_tile_package/MapServer/tile/{z}/{y}/{x}', {
    //         attribution: '© ArcGIS Online'
    //     }).addTo(map);

    // var frac = L.tileLayer.wms("http://localhost:8080/geoserver/wms", {
    // layers: 'test_ibra:image frac',
    // format: 'image/png',
    // transparent: true,
    // // version: '1.1.0',
    // // attribution: "myattribution"
    //  }).addTo(map);

    // var plan = L.tileLayer.wms("http://localhost:8080/geoserver/wms", {
    //     layers: 'test_ibra:plan mosaic',
    //     format: 'image/png',
    //     transparent: true,
    //     // version: '1.1.0',
    //     // attribution: "myattribution"
    //      }).addTo(map);
    
    // var photos = L.tileLayer.wms("http://localhost:8080/geoserver/wms", {
    //     layers: 'test_ibra:sites_photos',
    //     format: 'image/png',
    //     transparent: true,
    //     // version: '1.1.0',
    //     // attribution: "myattribution"
    //     }).addTo(map);

    //popup coding

    
    // var popup1 = photos.bindPopup().openPopup()
    // popup1.addTo(map)
    // var pop = photos.bindPopup(popupContent, {
    //     maxWidth: "auto"
    //   }).addTo(map);

    var singleMarker = L.marker ([45.43,4.38],{icon: myIcon, draggable: true});
	var popup = singleMarker.bindPopup('This is Saint-Etienne').openPopup()
    popup.addTo(map)

    // var secondMarker = L.marker ([45.50,4.38],{icon: myIcon, draggable: true});

	// // Regrouper les fonds de plan dans un conteneur
	
	// map.addControl(new L.Control.Layers( {
	// 		//'IGN': ignLayer,
	// 		'OpenStreetMap': osmLayer, 
	// 		'Carte Etat-major 1820-1866' : etatmajor,
	// 		'TOPO':wmsLayer,
	// 		'PhotoAerienne Histo 1950-1965':photoaerienne,
	// 		'Carte de Cassini':cassini,
	// 		'GoogleHybri': googleHybrid,
	// 		'Google Satellite':googleSat,
    //         'PLAN D ENSEMBLE': etape_plan
	// 		}, {})
	// 	);


    // *********************************************************************

    // GEOJSON

    // *********************************************************************

    // Créer des couches geoJSON dans le site https://geojson.io/#map=2/0/20, 
    // Telecharger les couches, changer l'extension en js
    // Creer une variable sur les couches dans le code js
    // Ajouter les couches dans Leaflet

   

    // var pointData = L.geoJSON(pointsJson, {
    //     onEachFeature: function(feature,layer){
    //         layer.bindPopup('<img src="'+ feature.properties.url +'" style="width:300px;height:300px;">')    
    //     }
    
    // }).addTo(map);

    // var lineData = L.geoJSON(lineJson).addTo(map);
    // var polygonData = L.geoJSON(polygonJson, {
    //     onEachFeature: function(feature,layer){
    //         layer.bindPopup('<b>Name: </b>' + feature.properties.name)
    //     },
    //     style: {
    //         fillColor: 'blue',
    //         fillOpacity: 1,
    //         color: 'red'

    //     }
    // }).addTo(map);

    // ****************************************************************************

    // AJOUTER DES POINTS EN GEOJSON, PERSONNALISER L ICONE ET CONFIGURER LE POPUP

    // ****************************************************************************

    var pointSites = L.geoJSON(sites, {
        // Ajouter une icone personnalisé sur les points
        pointToLayer: function(feature, latlng) {
            var PointIcon = L.icon({
                iconUrl: 'img/points.png',
                iconSize:     [30, 40], // size of the icon
                // shadowSize:   [50, 64], // size of the shadow
                // iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
                // shadowAnchor: [4, 62],  // the same for the shadow
                // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
            });
            
             return L.marker(latlng, {icon: PointIcon});
        },
        onEachFeature: function(feature,layer){
            layer.bindPopup('<b>ID: </b>' + feature.properties.ID + 
                             "</p>NOM: " + feature.properties.NOM +
                             "</p>ADRESSE: " + feature.properties.ADRESSE +
                             "</p>DATE PRISE: " + feature.properties.DATE_PRISE +
                             "</p>URL PHOTO: " + feature.properties.URL +
                             "</p>DESCRIPTION: " + feature.properties.DESCRIPTION +
                             '<img src="'+ feature.properties.URL +'" style="width:300px;height:300px;">')
        }
    }).addTo(map);


    var batiment = L.geoJSON(bati, {
     
        onEachFeature: function(feature,layer){
            layer.bindPopup('<b>DATE CREATION: </b>' + feature.properties.DATE_CREAT + 
                             "</p>ACQU_PLANI: " + feature.properties.ACQU_PLANI +
                             "</p>NATURE: " + feature.properties.NATURE 
                            //  "</p>DATE: " + feature.properties.DATE_PRISE +
                            // '<img src="'+ feature.properties.URL +'" style="width:300px;height:300px;">'
                            );
         },

        style: {
                fillColor: 'red',
                fillOpacity: 1,
                color: 'none'
               }
    }).addTo(map);

    var osm_furan = L.geoJSON(furan_osm, {
     
        onEachFeature: function(feature,layer){
            layer.bindPopup('<b>name: </b>' + feature.properties.name + 
                             "</p>Longueur (Km): " + feature.properties.long_km
                            //  "</p>DATE: " + feature.properties.DATE_PRISE +
                            // '<img src="'+ feature.properties.URL +'" style="width:300px;height:300px;">'
                            );
        },

        style: {
                fillColor: 'red',
                fillOpacity: 1,
                color: '#00008B'
              }
    }).addTo(map);

    var furan_digi = L.geoJSON(digi_furan, {
     
        onEachFeature: function(feature,layer){
            layer.bindPopup('<b>NOM: </b>' + feature.properties.NAME + 
                             "</p>Longueur (Km): " + feature.properties.long_Km +
                             "</p>TYPE: " + feature.properties.TYPE +
                             "</p>DESCRIPTION: " + feature.properties.DESCRIPTION
                            //  "</p>DATE: " + feature.properties.DATE_PRISE +
                            // '<img src="'+ feature.properties.URL +'" style="width:300px;height:300px;">'
                            );
        },

        style: {
                fillColor: 'red',
                fillOpacity: 1,
                color: '#ADD8E6'
              }
    }).addTo(map);

    var furan_bd_topage = L.geoJSON(bd_topage_furan, {
     
        onEachFeature: function(feature,layer){
            layer.bindPopup('<b>TopoOH: </b>' + feature.properties.TopoOH + 
                             "</p>SourceNomO: " + feature.properties.SourceNomO +
                             "</p>DateCreati: " + feature.properties.DateCreati +
                             "</p>long(Km): " + feature.properties.long_km
                            );
        },

        style: {
                fillColor: 'red',
                fillOpacity: 1,
                color: 'blue'
              }
    }).addTo(map);

    var vegetation = L.geoJSON(vege, {
     
        onEachFeature: function(feature,layer){
            layer.bindPopup('<b>name: </b>' + feature.properties.name + 
                             "</p>Longueur (Km): " + feature.properties.long_km
                            //  "</p>DATE: " + feature.properties.DATE_PRISE +
                            // '<img src="'+ feature.properties.URL +'" style="width:300px;height:300px;">'
                            );
        },

        style: {
                fillColor: 'green',
                fillOpacity: 1,
                color: 'none'
              }
    }).addTo(map);


    var zone_etude = L.geoJSON(buffer_zone, {
     
        onEachFeature: function(feature,layer){
            layer.bindPopup('<b>name: </b>' + feature.properties.name + 
                             "</p>Longueur (Km): " + feature.properties.long_km
                            //  "</p>DATE: " + feature.properties.DATE_PRISE +
                            // '<img src="'+ feature.properties.URL +'" style="width:300px;height:300px;">'
                            );
        },

        style: {
            fillColor: 'none', // Couleur de remplissage vide (ou 'transparent')
            fillOpacity: 0,    // Opacité de remplissage à 0 pour qu'il soit invisible
            color: 'black',    // Couleur de contour souhaitée
            weight: 2          // Largeur du contour en pixels
              }
    }).addTo(map);


    // *******************************************************************

    // AJOUTER DES IMAGES GEOREFERENCEES EN TANT QUE COUCHE

    // ******************************************************************

    // var imageUrl = 'img/FRAC42218_09_1FI_FURAN_11_0001_C.jpg';
    // var imageBounds = [[45.4324749, 4.3904152], [45.4355779, 4.3917320], [45.4418871, 4.3863416], 
    // [45.4413592, 4.3818623], [45.4228292, 4.4078156], [45.4616306, 4.3742138], [45.4748337, 4.3981198]]; // Coordonnées géoréférencées de l'image

    // var image_etp_couv = L.imageOverlay(imageUrl, imageBounds).addTo(map);

    // ***************************************************************
    // AJOUTER UNE COUCHE STOCKEE SUR MAPTILER
    // **************************************************************

    const key = 'WNuTiOTyljBTnHvnKQmZ';
    
    var frac_tile = L.tileLayer(`https://api.maptiler.com/tiles/e8c32aef-168d-4db4-bc2a-d89041efabdd/{z}/{x}/{y}.png?key=${key}`,{ //style URL
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 1,
    attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
    crossOrigin: true
    }).addTo(map);


    // var test_frac = L.tileLayer(`https://github.com/bambader/raster/frac_tileset/{z}/{x}/{y}.png`,{ //style URL
    // attribution: ""
    // }).addTo(map);

    // *******************************************************************
    // AJOUTER UNE COUCHE DE TUILE STOCKEE SUR ARCGIS ONLINE
    // *******************************************************************
    
    const apiKey = "AAPK65763c7a6bf4441193a660f185668d06OSx4X6YwDKcZF3PqzLP43TucpV9WI-_dv6t6FuFQk_3FIhI64QCp6BmGjRrMKH5O";

    var atlas = L.esri.tiledMapLayer({
       url:"https://tiles.arcgis.com/tiles/8uevmRlLsZdoxHk8/arcgis/rest/services/tile_package/MapServer"
      }).addTo(map);

    // using an item ID of an hosted ArcGIS Online content item
    // https://esri.maps.arcgis.com/home/item?id=f40326b0dea54330ae39584012807126
    //var etape = L.esri.Vector.vectorTileLayer("1ae35d70e7024d4486d224d3f9f6830c").addTo(map);



    //   require([
	// 	"esri/config",
	// 	"esri/Map",
	// 	"esri/views/MapView",
	// 	"esri/layers/WFSLayer",
	// 	"esri/layers/WMSLayer",
	// 	"esri/layers/GroupLayer",
	// 	"esri/widgets/Widget",
    //     "esri/widgets/LayerList",
	// 	"esri/widgets/Home",
    //     "esri/widgets/ScaleBar",
	// 	"esri/widgets/BasemapToggle",
    //     "esri/widgets/Zoom",
	// 	"esri/widgets/BasemapGallery",
	// 	"esri/widgets/Print"
	//   ], (esriConfig, Map, MapView, WFSLayer, WMSLayer, GroupLayer, Widget, LayerList, Home, ScaleBar, BasemapToggle, BasemapGallery, Zoom, Print) => {
	  
	// 	esriConfig.apiKey = "AAPK65763c7a6bf4441193a660f185668d06OSx4X6YwDKcZF3PqzLP43TucpV9WI-_dv6t6FuFQk_3FIhI64QCp6BmGjRrMKH5O";

    //     var etape = new WFSLayer({url: "https://tiles.arcgis.com/tiles/8uevmRlLsZdoxHk8/arcgis/rest/services/furan_tile_package/MapServer", 
    //     name: "SW_Provincias:Provincias", 
    //     title: "Provincias", 
    //     visible: false});
    // });

    // var etape = L.tileLayer.wms('https://tiles.arcgis.com/tiles/8uevmRlLsZdoxHk8/arcgis/rest/services/furan_tile_package/MapServer', {
	//     layers: 'GEOGRAPHICALGRIDSYSTEMS.ETATMAJOR40',
	//     format: 'image/png',
	//     transparent: true,
	//     attribution: 'IGN'
	//     }).addTo(map);

    





    // *******************************************************************
      
    // BASEMAPS

    // *******************************************************************


    var baseMaps = {
        //'IGN': ignLayer,
        "OpenStreetMap": osmLayer, 
        "Carte Etat-major 1820-1866" : etatmajor,
        "TOPO":wmsLayer,
        "PhotoAerienne Histo 1950-1965":photoaerienne,
        "Carte de Cassini":cassini,
        "GoogleHybri": googleHybrid,
        "Google Satellite":googleSat
        };




    // *******************************************************************
    
    // Layer controler
	
    // *******************************************************************

	

    var overlayMaps = {
        // "firstMarker" : singleMarker,
        // "secondMarker" : secondMarker,
        // "Points" :pointData ,
        // "Ligne" : lineData,
        // "Polygon" : polygonData,
        "SITES": pointSites,
		"Batiment": batiment,
        "Furan_osm": osm_furan,
        "Furan_digitalisation": furan_digi,
        "Furan_BDTOPAGE": furan_bd_topage,
        "Vegetation": vegetation,
        "Zone d'Etude Buffer": zone_etude,
        "STEP": frac_tile,
        "ATLAS CANTONAL 1887": atlas
        
    };


    L.control.layers(baseMaps,overlayMaps, {collapsed: true}).addTo(map);


 

    // Leaflet Search (mettre le c de Control.geocoder en majuscule sinon ca ne marche pas
    // et l echelle ne s affichera pas aussi de meme que le zoom sur la couche ne marche pas,
    // si on va au niveau du html c est ecrit avec C majuscule)
    L.Control.geocoder().addTo(map);

    // add scale to map 
    L.control.scale().addTo(map);

    // zoom to layer
    $('.zoom').click(function (){
        map.setView([saintEtienne.lat, saintEtienne.lng], zoomLevel)
    });

    // View map in full screen
    // var mapId = document.getElementById('mapid');
    // function fullScreenview() {
    //     mapId.requestFullscreen();
    // }

    // Map coordinate display

    map.on('mousemove', function(e) {
        console.log(e)
        $('.coordinate').html(`Lat: ${e.latlng.lat} Long: ${e.latlng.lng} `)
    })


}
