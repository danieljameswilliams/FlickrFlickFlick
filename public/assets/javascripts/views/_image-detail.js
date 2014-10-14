var App = App || {};
App.Views = App.Views || {};

App.Views.ImageDetail = (function () {

  var Struct = Backbone.View.extend({
    el: '.image__detail',
    template: Handlebars.templates['image-item'],
    collection: App.Collections.Images.OBJECT,
    initialize: function () {
      _.bindAll(this, 'render');
    },
    render: function ( data ) {
      if(typeof data == 'object') {
        console.log( 'Rendering with Object' );
      }
      else {
        console.log( 'Rendering without Object' );
      }
    }
  });

  var newObject = new Struct();

  return {
    STRUCT: Struct,
    OBJECT: newObject
  };

})();
