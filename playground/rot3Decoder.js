var alphabetArray = " abcdefghijklmnopqrstuvwxyz".split('');

function isCapital(letter){
  return (letter === letter.toUpperCase());
}

function rot3Decoder(code) {
  var codeArray = code.split('');

  var result = codeArray.map(function(letter) {
    var letterLocation = alphabetArray.indexOf(letter.toLowerCase());
    if (letterLocation === 0) {
      letter = alphabetArray[0];
    } else if (letterLocation > 13){
       letter = alphabetArray[letterLocation - 13];
    } else {
      letter = alphabetArray[letterLocation + 13];
    }
    return letter;
  }).map(function(letter, index) {
    if (isCapital(codeArray[index])) {
      letter = letter.toUpperCase();
    }
    return letter;
  });
  return result.join('');
}

var code = 'Fraq hf gur pbqr lbh hfrq gb qrpbqr guvf zrffntr';
console.log(rot3Decoder(code));
