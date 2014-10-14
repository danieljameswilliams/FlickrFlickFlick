var App = App || {};

App.API = (function () {

  // http://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json
  var objFlickr = {
    name: 'flickr',
    protocol: 'http://',
    host: 'api.flickr.com',
    rest: '/services/feeds/photos_public.gne',
    querystrings: {
      tags: 'hello,world', // Searches for 'hello,world' if undefined
      tagmode: 'all',
      format: 'json',
      jsoncallback: 'flickrFeedCallback'
    },
    search: null, // This is a shorthand for changing tags.
    url: _buildURL,
    paging: {
      skip: 0,
      take: 100 // Outputs '100' as default
    }
  };

  // Usage: objFlickr.url( { search: 'input' } );
  function _buildURL ( obj ) {
    // We created some shorthands for less code.
    _handleShorthands( this, obj );

    // If there is any overrules, we merge them here.
    $.extend( true, this, obj );

    // We assemble the basis of the URL
    var url = [ this.protocol, this.host, this.rest ];

    // We then put the parameters.
    if( this.querystrings !== undefined) {
      var count = 0;
      for(var p in this.querystrings) {
        var seperator = ( count == 0 ? '?' : '&' );
        url.push( seperator + encodeURIComponent( p ) + '=' + this.querystrings[p] );
        count++;
      }
    }

    url = url.join('');
    return url;
  }

  // { querystrings: { tags: 'input' } } can be shorthanded to { search: 'input' }
  function _handleShorthands ( mainObj, obj ) {
    var search = obj['search'];

    if( search !== undefined && typeof search == 'string' ) {
      switch ( mainObj.name ) {
        case 'flickr':
          mainObj['querystrings'].tags = search;
          break;
      }
    }
  }

  return {
    flickr: objFlickr
  };

})();

