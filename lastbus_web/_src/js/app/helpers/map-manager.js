/* global define */

/*
    Map Manager
    -----------
    Helper for handling google maps.
*/

'use strict';

define(['config'],
    function (Config) {

        var init = function () {
            console.log('init ran');
            // Create a map object and specify the DOM element for display.
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: {lat: 51.4498, lng: -2.5810},
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: true,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
                }
            });

            showStop(map, {lat: 51.4498, lng: -2.5810}, "Bristol Temple Meads")
        };

        var showStop = function(map, latlng, service) {
            var marker = new google.maps.Marker({
                title: service,
                position: latlng, 
                map: map
            });
        };

        return {
            load: init
        };
        
    });