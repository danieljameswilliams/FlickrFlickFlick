var App = App || {};
App.Helpers = App.Helpers || {};

App.Helpers.Dates = (function () {

  var monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

  function initialize () {
    _handlebarsHelper();
  }

  function _handlebarsHelper () {
    Handlebars.registerHelper( 'formatDate', function ( date ) {
      if ( typeof(date) == 'undefined' ) { return; }

      var format = 'ddd MMM yyyy at HH:mm';
      var datetime = new Date( date );

      format = _addFormatToDate( format, datetime );

      return format;
    });
  }

  function _addFormatToDate ( stringFormat, datetime ) {
    var format = stringFormat

      .replace( 'ddd',( '0' + datetime.getDate() ).slice(-2) + _addOrdinalToDate( datetime.getDate() ) ) // Example of output: "01st"
      .replace( 'dd', ( '0' + datetime.getDate() ).slice(-2) ) // Example of output: "01"
      .replace( 'MMMM', ( monthNames[ datetime.getMonth() ] ) ) // Example of output: "January"
      .replace( 'MMM', ( monthNames[ datetime.getMonth() ].substr(0,3) ) ) // Example of output: "Jan"
      .replace( 'MM', ( '0' + (datetime.getMonth()+1) ).slice(-2) ) // Example of output: "01"
      .replace( 'yyyy', datetime.getFullYear() ) // Example of output: "2014"
      .replace( 'HH', ( '0' + datetime.getHours() ).slice(-2) ) // Example of output: "11"
      .replace( 'mm', ( '0' + datetime.getMinutes() ).slice(-2) ); // Example of output: "43"

    return format;
  }

  function _addOrdinalToDate ( dateNumber ) {
    var ords = [ 'th', 'st','nd','rd' ],
        result;

    if( dateNumber > 10 && dateNumber < 14 ) {
      result = ords[0];
    }
    else {
      result = ords[ dateNumber % 10 ] || ords[0];
    }

    return result;
  }

  return {
    initialize: initialize
  };

})();
