/* global audi */
/* global define, $, Highcharts */

'use strict';

define(['mvc', 'config', 'text!templates/map.html'],
    function(MVC, Config, TemplateSource) {
        
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
            }
        });
        
        mapView.prototype.showData = function() {
            this.elements.data.html('<pre>' + JSON.stringify(this.data) + '</pre>');
        };
        
        mapView.prototype.showMap = function(){
            var that = this;
        };
        
        mapView.prototype.clearState = function() {
            this.elements.map.html('');
            this.elements.data.html('');
        }
        
        return mapView;
        
    });
