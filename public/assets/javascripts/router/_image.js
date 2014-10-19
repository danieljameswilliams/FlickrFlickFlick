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
    viewImage: function () {
      var model = window.localStorage.getItem( 'viewDetail' );
      App.Views.ImageDetail.OBJECT.render( model );
    }
  });
  var newObject = new Struct();

  return {
    STRUCT: Struct,
    OBJECT: newObject
  };

})();
