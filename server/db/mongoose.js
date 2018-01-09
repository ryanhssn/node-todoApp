var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//const dburl = "mongodb://localhost:27017/TodoApp";
const dburl = "mongodb://dbu_786:dbu@786@ds247357.mlab.com:47357/todo_database";

mongoose.connect(dburl, {
	useMongoClient: true
})

module.exports = {mongoose};
