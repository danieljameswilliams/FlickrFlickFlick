var App = App || {};
App.Models = App.Models || {};

App.Models.Image = (function () {

  var Model = Backbone.Model.extend({
    defaults: function() {
      return {
        title: null,
        link: null,
        media: {
          t: null,
          s: null,
          m: null,
          b: null
        },
        date_taken: null,
        description: null,
        published: null,
        author: null,
        author_id: null,
        tags: null
      };
    }
  });

  return {
    MODEL: Model
  };

})();
