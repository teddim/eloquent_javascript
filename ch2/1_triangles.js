//solve with array
var array = [];
var oc = '#';
var result = '';
for (var i = 0; i < 8; i++) {
  array.push(oc);
  result += array.join('') + "\n";
}
console.log(result);

//solve with a string
var triangle = '';
var oc = '#';
var result = '';
for (var i = 0; i < 8; i++) {
  triangle += oc;
  result += triangle + "\n";
  console.log(result.trim());
}
