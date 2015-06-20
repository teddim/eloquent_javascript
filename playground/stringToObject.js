function parseString(string) {
  var pairs = string.split("&");
  var resultObj = {};
  pairs.forEach(function(element, i){
    var key = element.split('=');
    resultObj[key[0]] = key[1];
  });

  return resultObj;

}

console.log(parseString("driver=Batman&make=Wayne+Enterprises&model=1.0&year=2010"));
// { "driver": "Batman", "make": "Wayne+Enterprises", "model": "1.0", "year": "2010" }


console.log(parseString("jedi=Luke&light_saber=green&home=tatooine"));
// {"jedi": "Luke", "light_saber": "green", "home": "tatooine" }
