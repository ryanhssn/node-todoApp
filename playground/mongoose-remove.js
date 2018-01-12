const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


Todo.findByIdAndRemove('5a54b9f3ec1329413cdc0633').then((todo) => {
	console.log(todo);
});