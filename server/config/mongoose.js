var mongoose = require('mongoose')

module.exports = function(config){
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error.'));
  db.once('open', function callback(){
    console.log('riffydb connected');
  });
  var userSchema = mongoose.Schema({
    username: String,
    riffs: [String]
  })

  var User = mongoose.model('User', userSchema);

  User.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      User.create({username:'stimko', password:'stimko'})
      User.create({username:'jamie', password:'jamie'})
    }
  })
}