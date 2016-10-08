/* global define */

'use strict';

define(['config'],
    function (Config) {
        
        var allResults = function() {
            this.apiKey = Config.apiKey;
            this.stops = [];
            return this;
        };
        
        return {
            all : allResults
        };
        
    });
