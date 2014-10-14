var App = App || {};

$(document).ready(function () {
  Backbone.history.start({
    pushState: true,
    root: '/'
  });

  App.Helpers.Dates.initialize();
  App.Helpers.Tags.initialize();
  App.Helpers.URL.initialize();
});
