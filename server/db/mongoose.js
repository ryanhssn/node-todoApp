var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://ryanhssn:admin123@ds247357.mlab.com:47357/todo_database', {
	useMongoClient: true
})

module.exports = {mongoose};
