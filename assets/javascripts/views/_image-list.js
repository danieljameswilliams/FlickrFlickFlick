var App = App || {};
App.Views = App.Views || {};

App.Views.ImageList = (function () {

  var Struct = Backbone.View.extend({
    el: $('.image__list'),
    initialize: function () {
      _.bindAll(this, 'render');
    }
  });

  var newObject = new Struct();

  return {
    STRUCT: Struct,
    OBJECT: newObject
  };

})();
