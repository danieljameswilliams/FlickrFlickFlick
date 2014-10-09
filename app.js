var express = require('express');
var handlebars = require('express-handlebars');
var path = require('path');

var app = express();
var viewsFolder = __dirname + '/public/templates';

app.use(express.static(__dirname + '/public'));

app.engine( 'handlebars', handlebars(
{
  defaultLayout: viewsFolder + '/master',
  layoutsDir: viewsFolder + '/layouts'
}) );
app.set('view engine', 'handlebars');
app.set('views', viewsFolder);

app.get('/', function (req, res) {
  res.render('layouts/image-list');
});

app.listen(3000);
