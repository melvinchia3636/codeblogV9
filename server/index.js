// express
const express = require('express');
const mongodb = require('mongodb');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use('/static', express.static(__dirname + '/images'));

app.use('/projects/list/:category', (req, res) => {
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
    collection.find({
      category: req.params.category,
    }).toArray((err, docs) => {
      if (err) {
        console.log(err);
        return;
      }
      res.send(docs);
    });
  });
});

app.use('/quotes/list', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  // connect to mongodb
  mongodb.MongoClient.connect('mongodb+srv://redaxe:nFl2muMZQjmHinis@cluster0.enpf0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', (err, client) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('connected to mongodb');
    const db = client.db('quotes');
    const collection = db.collection('quotes');
    collection.find({}).toArray((err, docs) => {
      if (err) {
        console.log(err);
        return;
      }
      res.send(docs);
    });
  });
});

app.use('/mottoes/list', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  // connect to mongodb
  mongodb.MongoClient.connect('mongodb+srv://redaxe:nFl2muMZQjmHinis@cluster0.enpf0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', (err, client) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('connected to mongodb');
    const db = client.db('quotes');
    const collection = db.collection('mottoes');
    collection.find({}).toArray((err, docs) => {
      if (err) {
        console.log(err);
        return;
      }
      res.send(docs);
    });
  });
});

app.post('/:db/:collection/add/:password', (req, res) => {
  if (req.params.password === "redaxe3636") {
    res.setHeader('Content-Type', 'application/json');
    // connect to mongodb
    mongodb.MongoClient.connect('mongodb+srv://redaxe:nFl2muMZQjmHinis@cluster0.enpf0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', (err, client) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('connected to mongodb');
      const db = client.db(req.params.db);
      const collection = db.collection(req.params.collection);
      collection.insertOne(req.body, (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        res.send(result);
      });
    });
  } else {
    res.status(403).send('Access denied');
  }
})

app.get('/addfield', (req, res) => {
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
    collection.updateMany({}, { $set: { 'techs': [] } }, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      res.send(result);
    });
  });
});


app.listen(3001, () => {
  console.log('listening on port 3001');
});