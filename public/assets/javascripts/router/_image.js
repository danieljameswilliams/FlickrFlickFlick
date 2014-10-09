var App = App || {};
App.Router = App.Router || {};

App.Router.Image = (function () {

  var Struct = Backbone.Router.extend({
    routes: {
      '' : 'newestImages',
      'view/:id': 'viewImage'
    },
    initialize: function () {
      console.log( 'Initialize Routers' );
    },
    newestImages: function () {
      console.log( 'Frontpage loaded' );
      App.Collections.Images.OBJECT.sync();
    },
    viewImage: function ( id ) {

    }
  });

  var newObject = new Struct();

  Backbone.history.start({
    pushState: true,
    root: '/'
  });

  return {
    STRUCT: Struct,
    OBJECT: newObject
  };

})();
