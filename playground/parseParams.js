function parseParams(queryString){
  var split = queryString.split('&');
  var result = {};
  for (var i =0; i< split.length; i++) {
    var secondSplit = split[i].split("=");
    result [secondSplit[0]] = secondSplit[1];
  }
return result;
}

function parseParams(queryString) {
  return queryString.split('&').map(function(pairs) {
    return pairs.split('=');
  }).reduce(function(prev,curr) {
    prev[curr[0]] = curr[1];
    return prev;
  }, {});
}
console.log(parseParams("foo=bar&cat=dog"));
