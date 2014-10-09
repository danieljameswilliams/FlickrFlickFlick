var express = require('express');
var handlebars = require('express-handlebars');
var path = require('path');

var app = express();
var viewsFolder = __dirname + '/public/views';

app.use(express.static(__dirname + '/public'));

app.engine( 'handlebars', handlebars(
{
  defaultLayout: viewsFolder + '/layouts/master',
  layoutsDir: viewsFolder + '/layouts',
  partialsDir: viewsFolder + '/partials'
}) );
app.set('view engine', 'handlebars');
app.set('views', viewsFolder);

app.get('/', function (req, res) {
  res.render('home');
});

app.listen(3000);
