var throttle = require('throttle'),
    fs = require('fs'),
    probe = require('node-ffprobe');
probe(track, function(err, probeData) {
  var bit_rate = probeData.format.bit_rate;
  var currentStream = fs.createReadStream('track.mp3');
  var unthrottle = throttle(currentStream, (bit_rate/10) * 1.4); // this multiplier may vary depending on your machine
  currentStream.on('data', function(data){
    decoder.write(data); // consider the decoder instance from the previous example
  });
});