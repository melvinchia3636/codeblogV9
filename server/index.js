// express
const express = require('express');
const mongodb = require('mongodb');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use('/static', express.static(__dirname + '/images'));

app.use('/projects/list', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  // connect to mongodb
  mongodb.MongoClient.connect('mongodb+srv://redaxe:nFl2muMZQjmHinis@cluster0.enpf0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', (err, client) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('connected to mongodb');
    const db = client.db('project-list');
    const collection = db.collection('projects');
    collection.find({}).toArray((err, docs) => {
      if (err) {
        console.log(err);
        return;
      }
      res.send(docs);
    });
  });
});

app.post('/project/add', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  // connect to mongodb
  mongodb.MongoClient.connect('mongodb+srv://redaxe:nFl2muMZQjmHinis@cluster0.enpf0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', (err, client) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('connected to mongodb');
    const db = client.db('project-list');
    const collection = db.collection('projects');
    collection.insertOne(req.body, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      res.send(result);
    });
  });
})


app.listen(3001, () => {
  console.log('listening on port 3001');
});