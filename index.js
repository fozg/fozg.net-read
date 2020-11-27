var express = require('express')
var app = express();
const mongoose = require('mongoose');
var cors = require('cors')

var routes = require('./routes');
var api = require('./api');
// View engine
app.locals.isProduction = process.env.NODE_ENV === 'production';

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')
app.use('/blog/static/', express.static(__dirname + '/client/build/static'))
app.use('/blog/public/', express.static(__dirname + '/client/build'))
app.use('/', routes);
app.use('/blog/api', cors(), api);
mongoose.connect('mongodb://localhost/fozg-net-blogs', { useNewUrlParser: true });

app.listen(3501)
