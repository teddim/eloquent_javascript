var fs = require("fs");

//command line arguments in an array
// ruby version - ARGV

var filename = process.argv[2];
// arguments start at 2 since node and the path to the file are in the 0th and 1st place of the array [ node, foo.js, arg1]

fs.readFile(filename, function(err, data) {
  if (err) throw err;

  console.log(data.toString()); //without the string method we get a binary buffer representation
});
