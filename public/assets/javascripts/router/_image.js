var App = App || {};
App.Router = App.Router || {};

App.Router.Image = (function () {

  var Struct = Backbone.Router.extend({
    routes: {
      '' : 'newestImages',
      'photos/:username/:photoid': 'viewImage'
    },
    initialize: function () {
      _.bindAll(this, 'newestImages', 'viewImage');
    },
    newestImages: function () {
      App.Collections.Images.OBJECT.sync();
    },
    viewImage: function ( model ) {
      // TODO: Get the Clicked Model in the Router view, to send with your renderer - so you can save an request.
      // Alternativley you can save it in localStorage ..
      App.Views.ImageDetail.OBJECT.render();
    }
  });
  var newObject = new Struct();

  return {
    STRUCT: Struct,
    OBJECT: newObject
  };

})();
