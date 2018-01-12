const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
})


app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  })
})

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send('Id is not valid, please check and try again..');
  }

  Todo.findById(id).then((todo) => {
    if(!todo) {
     return res.status(404).send('Sorry, Todo not found');
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send(e);
  })

})

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send(`ID: "${id}" is not valid, record cannot be delete.`)
  }

  Todo.findByIdAndRemove(id).then((todo) => {
      if(!todo){
        return res.status(404).send(`Todo not find with the id: "${id}"`)
      }
      res.send({todo})
  }).catch((e) => {
    res.status(400).send(e)
  })

})

app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if(!ObjectID.isValid(id)){
    return res.status(404).send(`ID: "${id}" is not valid, record cannot be update.`)
  }

  if(_.isBoolean(body.completed) && body.completed) {
      body.completedAt = new Date().getTime();
  } else {
      body.completed = false;
      body.completedAt = null;
  }


  Todo.findByIdAndUpdate(id, {$set:body}, {new: true}).then((todo) => {
      if(!todo) {
        return res.status(404).send();
      }

      res.send({todo});
  }).catch((e) => {
    res.status(400).send(e)
  })
})

app.post('/users', (req, res) => {
   var body = _.pick(req.body, ['email', 'password']);
   var user = new User(body);

<<<<<<< HEAD
   user.save().then(() => {
     return user.generateAuthToken();
   }).then((token) => {
      res.header('x-auth', token).send(user);
=======
   user.save().then((user) => {
     res.send(user);
>>>>>>> 33a28f822a1fdd8c4f56244471ee61a6dcae2a89
   }).catch((e) => {
     res.status(400).send(e);
   })
})

app.listen(port, () => {
  console.log(`Started on port ${port}`);
})

module.exports = {app};
