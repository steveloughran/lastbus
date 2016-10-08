/* global define */

'use strict';

define(['mvc'],
    function(MVC) {
        
        var coreRegion = MVC.Region.extend({
            
            name : 'core region',
            container: '#app-wrapper',
            
        });
        
        return coreRegion;
        
    });