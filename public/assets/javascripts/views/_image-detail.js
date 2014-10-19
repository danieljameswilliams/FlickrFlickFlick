var App = App || {};
App.Views = App.Views || {};

App.Views.ImageDetail = (function () {

  var Struct = Backbone.View.extend({
    el: '.image__detail',
    template: Handlebars.templates['image-detail'],
    collection: App.Collections.Images.OBJECT,
    initialize: function () {
      _.bindAll(this, 'render');
    },
    render: function ( data ) {
      var data = JSON.parse( data );
      if(typeof data == 'object') {

        var html = this.template( { model: data } );
        this.collection.el.html( html );
      }
    }
  });

  var newObject = new Struct();

  return {
    STRUCT: Struct,
    OBJECT: newObject
  };

})();
