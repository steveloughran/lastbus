/* global define, audi, $ */

'use strict';

define(['mvc', 'text!templates/core.html'],
    function(MVC, TemplateSource) {
        
        MVC.View.Elements.Core = {
        };
        
        var coreView = MVC.View.extend({
            name : 'core view',
            template: TemplateSource
        });
        
        return coreView;
        
    });
