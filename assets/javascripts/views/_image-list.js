var App = App || {};
App.Views = App.Views || {};

App.Views.ImageList = (function () {
  // This is a private constructor.
  var Struct = Backbone.View.extend({
    el: $('body'),
    initialize: function () {}
  });

  // This is an instance of the constructor above
  var newObject = new Struct();

  return {
    STRUCT: Struct,
    OBJECT: newObject
  };
})();

// QUESTION 1) Is a Constructor and Struct the same?
// QUESTION 2) What is the rule for return uppercase naming?
