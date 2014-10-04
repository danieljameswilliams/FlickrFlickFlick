var App = App || {};
App.Views = App.Views || {};

App.Views.ImageItem = (function () {

  var Struct = Backbone.View.extend({
    el: $('.image__item'),
    template: Handlebars.templates['image-item'],

    initialize: function () {
      _.bindAll(this, 'render', 'appendImage');
      this.collection = new App.Collections.Image.COLLECTION();
      var imageList = App.Views.ImageList.OBJECT;
      this.collection.bind( 'add', this.appendImage );
    },
    render: function ( data ) {
      if(typeof data == 'object') {
        var model = new App.Models.Image.MODEL();
        model.set( data );
        this.collection.add( model );
      }
    },
    appendImage: function ( model ) {
      var html = this.template( { model: model.toJSON() } );
      App.Views.ImageList.OBJECT.$el.append( html );
    }

  });

  var newObject = new Struct();

  return {
    STRUCT: Struct,
    OBJECT: newObject
  };

})();
