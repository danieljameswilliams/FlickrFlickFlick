var App = App || {};

$(document).ready(function() {
  // App.API.flickr.url({ search: '' });
  // App.Views.ImageList.OBJECT
  Handlebars.registerHelper( 'formatDate', function ( date ) {
    if ( typeof(date) == 'undefined' ) { return; }
    var format = 'ddd MMM yyyy at HH:mm';
    var datetime = new Date( date );
    var monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

    format = format
    .replace( 'ddd',( '0' + datetime.getDate() ).slice(-2) + addOrd( datetime.getDate() ) )
    .replace( 'dd', ( '0' + datetime.getDate() ).slice(-2) )
    .replace( 'MMMM', ( monthNames[ datetime.getMonth() ] ) )
    .replace( 'MMM', ( monthNames[ datetime.getMonth() ].substr(0,3) ) )
    .replace( 'MM', ( '0' + (datetime.getMonth()+1) ).slice(-2) )
    .replace( 'yyyy', datetime.getFullYear() )
    .replace( 'HH', ( '0' + datetime.getHours() ).slice(-2) )
    .replace( 'mm', ( '0' + datetime.getMinutes() ).slice(-2) )

    return format;
  });
});

function addOrd (n) {
  var ords = [,'st','nd','rd'];
  var ord, m = n%100;
  return ((m > 10 && m < 14)? 'th' : ords[m%10] || 'th');
}
