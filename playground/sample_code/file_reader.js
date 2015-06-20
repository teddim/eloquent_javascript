//read in a file using node on the CLI , copy file adding .copy to the extension
// output should be foo.txt to foo.txt.copy
var fs = require("fs");

var filename = process.argv[2];
filenameCopy = process.argv[2] + ".copy";

fs.readFile(filename, function(err, data) {
  if (err) throw err;

  fs.writeFile(filenameCopy, data, function(err, data) {
    if (err) throw err;
    console.log("file written");
  })
});
