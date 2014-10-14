var App = App || {};
App.Helpers = App.Helpers || {};

App.Helpers.URL = (function () {

  function initialize () {
    _handlebarsHelper();
  }

  function _handlebarsHelper () {
    Handlebars.registerHelper( 'getURL', function ( url ) {
      if ( typeof(url) == 'undefined' || url.length == 0) { return; }

      // TODO: Should be able to Handle both HTTP and HTTPS
      var arr = url.split("/");
      var baseURL = arr[0] + "//" + arr[2];
      var result = url.replace( baseURL, '' ).slice(0,-1);

      return result;
    });
  }

  return {
    initialize: initialize
  };

})();
