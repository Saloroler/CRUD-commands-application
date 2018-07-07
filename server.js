var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;



var app = express();
var db;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

var users = [
  {
    id: 1,
    name: 'Oleg',
    coment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur inventore maiores officiis quis. Accusantium ad blanditiis cum delectus eaque earum eligendi illum inventore iusto nemo nisi odio, omnis provident, veritatis?'
  },
  {
    id: 2,
    name: 'Vasya',
    coment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur inventore maiores officiis quis. Accusantium ad blanditiis cum delectus eaque earum eligendi illum inventore iusto nemo nisi odio, omnis provident, veritatis?'
  }
];

app.get('/', function (req, res){
  res.send('Hello API');
});

app.get('/users', function (req, res) {
  db.collection('users').find().toArray(function (err, docs) {
    if(err){
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  })
  // res.send(users);
});
//find on the id key
app.get('/users/:id', function (req, res) {
  db.collection('users').findOne({ _id: ObjectId(req.params.id) }, function (err, doc) {
    if(err){
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(doc);
  });
  // var user = users.find (function (user) {
  //     return user.id === Number(req.params.id);
  // })
  // res.send(user);
});
// save in memory
app.post('/users', function (req, res) {
  var user = {
    //id: Date.now(),
    name: req.body.name,
    coment: req.body.coment
  };
  //  users.push(user);
  db.collection('users').insert(user, function (err, result) {
    if(err){
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(user);
  })
  //  res.send(user);
});

//reload data
app.put('/users/:id', function (req,res) {
  db.collection('users').update(
    { _id: ObjectId(req.params.id)},
    { name: req.body.name },
    function (err, result) {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.sendStatus(200);
    }
  )
  // var user = users.find(function (user) {
  //     return user.id === Number(req.params.id);
  // });
  // user.name = req.body.name;
  // res.sendStatus(200);
});

app.delete('/users/:id', function (req, res) {
  db.collection('users').deleteOne(
    { _id: ObjectId(req.params.id)},
    function (err, result) {
      if (err){
        console.log(err);
        return res.sendStatus(500);
      }
      res.sendStatus(200);

    }
  )
  // users = users.filter(function (user) {
  //     return user.id !== Number(req.params.id);
  // })
  // res.sendStatus(200);
})


// ///
MongoClient.connect('mongodb://localhost:27017/myapi', function (err, database) {
  if(err){
    return console.log(err);
  }
  db = database.db('users');
  app.listen(3012, function () {
    console.log('API app started');
  })
})
