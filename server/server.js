var express = require('express');
var path=require ('path');
var app = express();
const bodyParser= require ('body-parser');
const MongoClient = require('mongodb').MongoClient

app.get('/', (req, res)=> {
  res.sendFile( '/Users/cataalfonso/Documents/Documents/Proyectos/app-cata-task/public/index.html')
});

app.use('/', express.static('public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
}); 



//The urlencoded method within body-parser tells body-parser to extract data from 
//the <form> element and add them to the body property in the request object.
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect('mongodb+srv://taskmanager:my1st4pp$$@cluster0-wqwtx.mongodb.net/test?retryWrites=true&w=majority',{
  useUnifiedTopology: true})
  .then (client => {
    console.log('Connected to Database')
    const db = client.db('to-do-tasks')
    const tasksCollection = db.collection('tasks')

    //app.use(/* ... */)
    app.get('/', (req, res) => {
      db.collection('tasks').find().toArray()
        .then(results => {
          console.log(results)
        })
        .catch(error => console.error(error))
      })
      
    app.post('/tasks', (req, res) => {
      tasksCollection.insertOne(req.body)
      .then(result => {
        res.redirect('/')
      })
      .catch(error => console.error(error))
    })
    //app.listen(/* ... */)
   })
  .catch(error => console.error(error))


