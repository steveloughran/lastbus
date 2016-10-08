/* global audi */
/* global define, $ */

'use strict';

define(
  [
    'mvc',
    'regions/r-core',
    'controllers/c-main',
    'jquery',
    'domready'
  ],
  function AppSetup(
    MVC,
    CoreRegion,
    InitialController
  ){
    // Create the global namespace region object.
    var initNamespace = function() {
      window.lastbus = window.lastbus || {
        Home : new InitialController(),
        AppCanvas : new CoreRegion()
      };
      MVC.DefaultRegion = window.lastbus.AppCanvas;
    };

    var run = function AppRun() {
      
      initNamespace();
      
      // Kick the Initial Controller to determine the initial view to render.
      lastbus.Home.init();
      
      // Prepare the canvas.
      var $corpus = $('.corpus'),
      $window = $(window);
  
      if ($corpus.innerHeight() < $window.height()) {
        $corpus.innerHeight($window.height());
      }
      
      $corpus.fadeIn();
    };

    return {
      run: run
    };

  });
