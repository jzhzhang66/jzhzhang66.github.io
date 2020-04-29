var express = require('express');
var app = express();
var axios = require('axios');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
//app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
//app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });

// set the home page route
app.get('/landscape', async function(req, res) {
    const landscape = await getAlbum("be3E4cTRwJ3h9A7G6");
    // ejs render automatically looks in the views folder
    const data = extractPhotos(landscape)
    res.json(data);
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

async function getAlbum(id) {
    const response = await axios.get(`https://photos.app.goo.gl/${id}`, {headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }})
    console.log(response.data)
    return response.data
   }

const regex = /"(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g
function extractPhotos(content) {
    const links = []
    let match
    while (match = regex.exec(content)) {
    links.push(match[1])
    } 
    return links
}