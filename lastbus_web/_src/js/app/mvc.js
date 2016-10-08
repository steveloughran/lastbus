/* global $ */
/* global define */

'use strict';

/*
    CLIENT MVC JS Wrapper
    ---------------------
    This wraps the Client MVC framework and allows for app specific functionality to be coded into the base classes.
*/

define(['client-mvc', 'mustache', 'config'],
    function(ClientMVC, Mustache, Config) {

        var exView = ClientMVC.View.extend({
            name : 'custom view'
        });
        
        exView.prototype.renderContent = function() {
            var data = this.getDataObject();
            if (data !== null) {
                var html = Mustache.to_html(this.template, data);
                return html;
            } else {
                return this.template;
            }
        };

        return {
            Controller: ClientMVC.Controller,
            View: exView,
            Region: ClientMVC.Region
        };
        
    });
