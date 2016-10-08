/*
    Config
    ------
    Config settings used for the SPA.
*/

define([],
    function () {

        var shouldAlertErrors = function() {
            return window.location.href.indexOf("local") > -1 || window.location.href.indexOf("127.0.0.1") > -1;
        };

        return {
            alertErrors : shouldAlertErrors(),
            logErrors : false,
            logInfo: false,
            debugData : false,
            appTitle: 'LastBus'
        };
    });