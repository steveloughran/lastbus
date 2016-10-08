/* global define */

'use strict';

define([],
    function () {
        
        var allResults = function() {
            
            this.stops = [];
            return this;
        };
        
        return {
            all : allResults
        };
        
    });
