var App = App || {};
App.Views = App.Views || {};

App.Views.ImageList = (function () {

  var Struct = Backbone.View.extend({
    el: $('body'),
    initialize: function () {}
  });

  var newObject = new Struct();

  return {
    STRUCT: Struct,
    OBJECT: newObject
  };

})();
