/* global audi */
/* global define, $, Highcharts */

'use strict';

define(['mvc', 'config', 'helpers/map-manager', 'text!templates/map.html'],
    function(MVC, Config, MapManager, TemplateSource) {
        
        MVC.View.Elements.Map = {
            map : '#map',
            data : '#data'
        };
        
        var mapView = MVC.View.extend({
            name : 'map view',
            template: TemplateSource,
            
            postRender : function() {
                this.elements.map = $(MVC.View.Elements.Map.map);
                this.elements.data = $(MVC.View.Elements.Map.data);
                this.showMap();
            }
        });
        
        mapView.prototype.showData = function() {
            this.elements.data.html('<pre>' + JSON.stringify(this.data) + '</pre>');
        };
        
        mapView.prototype.showMap = function(){
            var mapScript = document.createElement('script');
            mapScript.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=' + Config.gMapsApiKey + '&callback=window.lastbus.Maps.load');
            mapScript.setAttribute('async', '');
            mapScript.setAttribute('defer', '');
            (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(mapScript);
        };
        
        mapView.prototype.clearState = function() {
            this.elements.map.html('');
            this.elements.data.html('');
        }
        
        return mapView;
        
    });
