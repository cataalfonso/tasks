var express = require('express');
var path=require ('path');
var app = express();

app.get('/', (req, res)=> {
  res.send('Hello World!');
});


app.use('/app', express.static('public'));


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
}); 

app.post('/tasks', (req, res) => {
  console.log('Hellooooooooooooooooo!')
});