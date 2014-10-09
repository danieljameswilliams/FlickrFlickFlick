var App = App || {};
App.Helpers = App.Helpers || {};

App.Helpers.Tags = (function () {

  var excludePattern = [':'];

  function initialize () {
    _handlebarsHelper();
  }

  function _handlebarsHelper () {
    Handlebars.registerHelper( 'tags', function ( tags, block ) {
      if ( typeof(tags) == 'undefined' || tags.length == 0) { return; }

      var tagsArray = [];
      var returnList = '';

      // First we split the string-tags to an array, and then exclude the ones we don't want.
      tagsArray = tags.split(' ');
      tagsArray = _excludeTagsWithPattern( tagsArray );

      // We then render the template-markup with the tags-content as the {{ this }} placeholder.
      // TODO: Run the code, so a tagsArray-for-loop isn't run two times (one in excludeTags, and one here)
      for ( var i = 0; i < tagsArray.length; i++ ) {
        returnList += block.fn({ value: tagsArray[i] });
      }

      // We use arrays to assemble the string throughout the site, for better performance, vs. adding the string with += ''
      //returnArray = returnArray.join('');
      return returnList;
    });
  }

  /**
   * We need to remove tags generated by 3rd party apps or flickr.
   * Example of removed items: ["uploaded:by=X", "foursquare:venue=X"] etc.
   * @param  {object} tagsObject [An object containing everything that the API gives us]
   * @return {object}            [Basicly the same object as passed in, but we removed some items, if they contain blacklisted characters/words]
   */
  function _excludeTagsWithPattern ( tagsArray ) {
    var cleanedArray = [];

    for ( var i = 0; i < tagsArray.length; i++ ) {
      for ( var p = 0; p < excludePattern.length; p++ ) {
        if ( tagsArray[i].indexOf( excludePattern[p] ) == -1) {
          cleanedArray.push( tagsArray[i] );
        }
      }
    }

    return cleanedArray;
  }

  return {
    initialize: initialize
  };

})();