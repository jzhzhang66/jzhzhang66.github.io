var express = require('express');
var app = express();
var axios = require('axios');
const urlMetadata = require('url-metadata');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;


// make express look in the public directory for assets (css/js/img)
//app.use(express.static(__dirname + '/public'));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// set the home page route
app.get('/landscape', async function (req, res) {
  const landscape = await getAlbum("be3E4cTRwJ3h9A7G6");
  // ejs render automatically looks in the views folder
  const data = extractPhotos(landscape);
 /* const metadata = data.map((link) => {
    urlMetadata(link) 
  })
  urlMetadata('https://lh3.googleusercontent.com/DRhkd8rawQqRAGzmgR8OBsxsYWEPrZjb2CvxxYC62Q5MXKDX2P0A51d1Miv5w-1hjOF4KcA8-L32LffoujtONAya1AAzdLIR4oZwK10KJDuTTm9-2v3ieCTFQTcBIGoLuzV54WAQTZs').then(
    function (metadata) { // success handler
      console.log(metadata)
    },
    function (error) { // failure handler
      console.log(error)
    }
  )
  // waits until all promises inside metadata are resolved 
  await Promise.all(metadata);
  console.log(metadata);*/
  res.json(data);
});

async function getAlbum(id) {
  const response = await axios.get(`https://photos.app.goo.gl/${id}`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  })
  return response.data
}

const regex = /"(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*",[0-9]*,[0-9]*)/g
function extractPhotos(content) {
  const links = []
  let match
  while (match = regex.exec(content)) {
    var first = match[1].split("\",");
    var second = first[1].split(",");
    links.push({
      src: first[0],
      width: parseInt(second[0]),
      height: parseInt(second[1])
    });
  }
  return links
}

app.listen(port, function () {
  console.log('Our app is running on http://localhost:' + port);
});
