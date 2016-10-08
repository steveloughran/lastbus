/* global define */

/*
    Error Manager
    -------------
    Helper for handling how error information is handled.
*/

'use strict';

define(['config', 'mvc'],
    function (Config) {

        var handleError = function (error) {
            if (Config.logErrors && Object.exists(console)) {
                console.log(error);
            }

            if (Config.alertErrors) {
                alert(Config.appTitle, error);
            }
        };

        var handleModelError = function (error, model) {
            if (Config.logErrors && Object.exists(console)) {
                console.log(error);
                console.log(model);
            }

            if (Config.alertErrors) {
                alert(Config.appTitle, error);
            }
        };

        var handleXhrError = function (msgRoot, xhr) {
            var msg = msgRoot + ': ' + (Object.exists(xhr) ? xhr.responseText : '');

            if (Config.logErrors && Object.exists(console)) {
                console.log(msg);
            }

            if (Config.alertErrors) {
                alert(Config.appTitle, msg);
            }
        };

        var throwError = function (error) {
            handleError(error);
            throw new Error(error);
        };

        var throwModelError = function(error, model) {
            handleModelError(error, model);
            throw new Error(error);
        };

        var throwXhrError = function(msgRoot, xhr) {
            handleXhrError(msgRoot, xhr);
            throw new Error(msgRoot);
        };

        return {
            handle: handleError,
            handleModel: handleModelError,
            handleXhr: handleXhrError,
            throw: throwError,
            throwModel: throwModelError,
            throwXhr: throwXhrError
        };
        
    });
