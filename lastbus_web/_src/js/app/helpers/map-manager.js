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

            // Create a map object and specify the DOM element for display.
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 17,
                center: {lat: 51.4498, lng: -2.5810},
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: true,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
                }
            });

            var data = {
                arrivalStation : {
                    name : "Bristol Temple Meads",
                    location : {lat : 51.4498, lng : -2.5810}
                },
                services: [
                    {
                        name: "8 - Westbury",
                        time: "8:15",
                        location : {lat : 51.4494, lng : -2.5817}
                    },
                    {
                        name: "9 - Henleaze",
                        time: "8:32",
                        location : {lat : 51.4492, lng : -2.58118}
                    },
                    {
                        name: "2 - Cribbs Causeway",
                        time: "8:12",
                        location : {lat : 51.44885, lng : -2.58401}
                    }
                ]
            }
            
            showStop(map, data.arrivalStation.location, 'STATION: ' + data.arrivalStation.name);

            for (var i = 0; i < data.services.length; i++) { 
                showStop(map, data.services[i].location, data.services[i].name + ' (' + data.services[i].time + ')')
            }
        };

        var showStop = function(map, latlng, service, icon) {
            var marker = new google.maps.Marker({
                title: service,
                position: latlng, 
                map: map
            });
        };

        return {
            load: init,
            data: {
                arrivalStation : {
                    name : "Bristol Temple Meads",
                    location : {lat : 51.4498, lng : -2.5810}
                },
                services: [
                    {
                        name: "8 - Westbury",
                        time: "8:15",
                        location : {lat : 51.4494, lng : -2.5817}
                    },
                    {
                        name: "9 - Henleaze",
                        time: "8:32",
                        location : {lat : 51.4492, lng : -2.58118}
                    },
                    {
                        name: "2 - Cribbs Causeway",
                        time: "8:12",
                        location : {lat : 51.44885, lng : -2.58401}
                    }
                ]
            }
        };
        
    });