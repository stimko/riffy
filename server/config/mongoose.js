var mongoose = require('mongoose'),
    crypto = require('crypto');

module.exports = function(config){
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error.'));
  db.once('open', function callback(){
    console.log('riffydb connected');
  });
  var userSchema = mongoose.Schema({
    username: String,
    riffs: [String],
    salt: String,
    hashedPassword: String,
    roles: [String]
  });

  userSchema.methods = {
    authenticate: function(passwordToMatch){
      return hashPassword(this.salt, passwordToMatch) === this.hashedPassword;
    }
  }

  var User = mongoose.model('User', userSchema);

  User.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      var salt, hash;
      salt = createSalt();
      hash = hashPassword(salt, 'stimko');
      User.create({username:'stimko', password:'stimko', salt: salt, hashedPassword:hash})
      salt = createSalt();
      hash = hashPassword(salt, 'jamie');
      User.create({username:'jamie', password:'jamie', salt: salt, hashedPassword:hash})
    }
  })
}

function createSalt(){
  return crypto.randomBytes(128).toString('base64');
}

function hashPassword(salt, password){
  var hmac = crypto.createHmac('sha1', salt);
  return hmac.update(password).digest('hex');

}