//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect MongoDB Server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // })
  //
  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
  //   console.log(result)
  // })

  // db.collection('Todos').findOneAndDelete({text: 'eat lunch'}).then((result) => {
  //   console.log(result)
  // })

  // db.collection('Users').deleteMany({name: 'Armaan Ibrahim'}).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5a50c9015b47cdec629fcb3f')}).then((result) => {
    console.log(result);
  })

  //db.close();
})
