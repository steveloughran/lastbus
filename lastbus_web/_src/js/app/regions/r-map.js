/* global define */

'use strict';

define(['mvc', 'regions/r-core', 'views/v-core'],
    function(MVC, ParentRegion, ParentView) {
        
        var mapRegion = MVC.Region.extend({
            
            name : 'map region',
            container: '#map-wrapper',
            parentRegion: new ParentRegion(),
            parentView: new ParentView()
            
        });
        
        return mapRegion;
        
    });