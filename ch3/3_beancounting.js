function countBs(input) {
  return countChar(input, "B");
}

function countChar(input, character) {
  var num_of_char = 0;
  for (var i = 0; i < input.length; i++) {
    if (input.charAt(i) === character) {
      num_of_char += 1;
    };
  }
  return num_of_char;

}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
