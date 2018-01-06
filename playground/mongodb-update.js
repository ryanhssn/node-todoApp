//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect MongoDB Server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a50a104dca0d217b066b333')
  // },{
  //   $set: {
  //     completed: true
  //   }
  // },
  // {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    name: 'Ryan Hussain'
  },{
    $set: {
      name: 'Ryan H'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })


  //db.close();
})
