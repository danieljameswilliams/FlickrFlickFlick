var App = App || {};
App.Collections = App.Collections || {};

App.Collections.Images = (function () {
  var dom = {
    $imageList: $('.image__list')
  };
  var Struct = Backbone.Collection.extend({
    model: App.Models.Image.MODEL,
    el: dom.$imageList,
    url: function () {
      return App.API.flickr.url({ search: '' });
    },
    sync: function () {
      var collection = this,
          params = _.extend({
            type: 'GET',
            dataType: 'jsonp',
            url: collection.url(),
            processData: false
          });

      window.flickrFeedCallback = function( res ) {
        collection.reset( res.items );
      };

      return $.ajax( params );
    },
    reset: function ( models ) {
      for(var i = 0; i < models.length; i++) {
        App.Views.ImageItem.OBJECT.render( models[i] );
      }
    }

  });

  var newObject = new Struct();

  return {
    STRUCT: Struct,
    OBJECT: newObject
  };

})();
