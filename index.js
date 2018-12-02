var express = require('express')
var app = express();
var fs = require('fs');
const mongoose = require('mongoose');
var cors = require('cors')

var routes = require('./routes');
var api = require('./api');
// View engine
app.set('views', __dirname + '/views')
app.set('view engine', 'pug')
// respond with "hello world" when a GET request is made to the homepage

app.use('/static/', express.static('client/build/static'))
app.use('/public/', express.static('public'))
app.use('/', routes);
app.use('/api', cors(), api);

mongoose.connect('mongodb://localhost/fozg-net-blogs', { useNewUrlParser: true });

// app.get('/', function (req, res) {
//   res.send(marked('# Marked in the browser\n\nRendered by **marked**.'))
// })

// app.get('/blog/', function(req, res) {
//   var blog = fs.readFileSync(__dirname + '/blogs/1.md', {encoding: 'utf8',})
//   console.log(blog)
//   res.render('blog', {content: marked(blog) })
// })

// app.get('/blogs', function(req, res) {
//   fs.readdir(__dirname + '/blogs', (err, files) => {
//     console.log(files);
//   });
  
//   res.send('test')
// })

app.listen(3333)

