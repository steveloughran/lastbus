/* global define lastbus */

'use strict';

define(['mvc', 'models/results', 'regions/r-map', 'views/v-map'],
    function (MVC, Results, MapRegion, MapView) {
        
        var mainController = MVC.Controller.extend({
            
            name : 'main controller',
            
            init : function() {
                var view = new MapView();
                view.data = Results.all();
                MVC.Controller.prototype.init(view, new MapRegion());
            }
            
        });
        
        return mainController;
        
    });
