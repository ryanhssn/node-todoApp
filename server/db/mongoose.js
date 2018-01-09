var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var dburl = 'mongodb://ryanhssn:admin123@ds247357.mlab.com:47357/todo_database';
//var dburl = 'mongodb://localhost:27017/TodoApp';

mongoose.connect(dburl, {
	useMongoClient: true
})

module.exports = {mongoose};
