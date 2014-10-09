var GalleryRouter = Backbone.Router.extend ({ routes: { '' : 'home', 'view': 'viewImage' }, home: function () { alert('you are viewing home page'); }, viewImage: function () { alert('you are viewing an image'); } });

var App = App || {};
App.Router = App.Router || {};

App.Router.Image = (function () {

  var Struct = Backbone.Router.extend({
    routes: {
      'Users/danielwilliams/Development/FlickrFlickFlick/index.html' : 'newestImages',
      'Users/danielwilliams/Development/FlickrFlickFlick/view.html/:id': 'viewImage'
    },
    initialize: function () {
      console.log( 'Initialize Routers' );
    },
    newestImages: function () {
      console.log( 'Newest Images Loading ..' );
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
