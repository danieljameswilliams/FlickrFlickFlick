var App = App || {};

$(document).ready(function() {
  console.log( App.API.flickr.url({ search: '12' }) );
});
