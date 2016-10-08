/* global require */

'use strict';

(function () {
  
  var root = this;
  
  require.config({
    baseUrl: '/_src/js/app/',
    paths: {
      domready: '../../../node_modules/domready/ready',
      jquery: '../../../node_modules/jquery/dist/jquery',
      underscore: '../../../node_modules/underscore/underscore',
      'client-mvc': '../../../node_modules/client-mvc/client-mvc',
      mustache: '../../../node_modules/mustache/mustache',
      text: '../vendor/text'
    },
    shim: {
      jquery: { exports: '$' },
      underscore: { exports: '_' },
      cookie: { exports: 'Cookie' },
      crypto: { exports: 'CryptoJS' },
      'crypto.base64': { deps: ['crypto'] },
    },
    config: {
        moment: {
            noGlobal: true
        }
    }
  });
  
  // these are defined externally so they can be used in our view templates:
  // define('handlebars', [], function () { return root.handlebars; });
  
  require(['app'], function (App) {
    App.run();
  });
  
})();
