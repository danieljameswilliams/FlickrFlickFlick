var App = App || {};
App.Collections = App.Collections || {};

App.Collections.Image = (function () {

  var Collection = Backbone.Collection.extend({
    model: App.Models.Image.MODEL,
    url: function () {
      return App.API.flickr.url({ search: '' });
    },
    initialize: function () {
      this.sync();
    },
    sync: function () {
      var collection = this,
          params = _.extend({
            type: 'GET',
            dataType: 'jsonp', // What does jsonp do exactly?
            url: collection.url(),
            processData: false
          });

      // QUESTION - How can this be the callback of the below lines?
      window.jsonFlickrFeed = function( res ) {
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

  return {
    COLLECTION: Collection
  };

})();
