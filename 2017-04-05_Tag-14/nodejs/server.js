var http = require('http');
var fs = require('fs');
var express = require('express');
var bp = require('body-parser');
var app = express();

var server = app.listen(12345, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server listen http://%s%s', host, port);
});
var files = [
  { req:'/', file: 'formular.html', type:'text/html' },
  { req:'/daten.html', file: 'daten.html', type:'text/html' }
];

app.use(express.static('public'));
app.use(bp.urlencoded({extended:true}));


app.post('/save', function(req,res){

  fs.readFile('namen.json', function(err, data){
    try {
      var user = JSON.parse(data);
      user.user.push(req.body);

      console.log('Neuer Name gespeicher.' + JSON.stringify(req.body));
      fs.writeFile('namen.json', JSON.stringify(user));
      res.writeHead(200, {'Content-Type':'application/json'});
      res.end(JSON.stringify({saved:true}));
    } catch(err){
      res.writeHead(500, {'Content-Type':'text/html'});
      res.end('File corrupt.');
    }
  })
})

app.get('/daten', function(req,res){

    fs.readFile('namen.json', function(err, data){
      try {
        var user = JSON.parse(data);
        var htmlPage = '<link rel="stylesheet" type="text/css" href="krieger.css"><table id="namen"><tr><th>Namen</th></tr>';
        for(let i in user.user){
          htmlPage += '<tr><td>'+user.user[i].name+'</td></tr>';
        }
        htmlPage += '</table></div>'
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(htmlPage);
        res.end();
      } catch(err){
        res.writeHead(500, {'Content-Type':'text/html'});
        res.end('File corrupt.');
      }

    })
});

for (let i in files) {
  app.get('/'+files[i].req, function(req,res){
    fs.readFile(files[i].file, function(err, data){
      if(err){
        res.writeHead(404, {'Content-Type':'text/html'});
        res.end('Seite nicht gefunden!');
      } else {
        res.writeHead(200, {'Content-Type':files[i].type});
        res.end(data.toString());
      }
    });
  });
};







/*
http.createServer( function( request, response){
  // Sent HTTP Header
  // Status 200/OK
  // Content Type:text/plain
  console.log(request.url);
  response.writeHead(200, {
    'Content-Type': 'text/html'
  });
  fs.readFile(request.url.substr(1), function(err, data){
    if(err){
      response.end('nix da')
    } else {
      response.end(data.toString());
    }
  });
}).listen(12345);

console.log('Server läuft: http://127.0.0.1:12345');
*/
