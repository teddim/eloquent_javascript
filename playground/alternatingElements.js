function alternatingElements(list1,list2) {
  var result =[];
  list1.forEach(function(element,index){
    result.push(element, list2[index]);
  });
  return result;
}


console.log(alternatingElements(['a','b','c'], [1,2,3]));
// ['a',1,'b',2,'c',3]

console.log(alternatingElements([2,'or',2], ['b','not','b']));

function wordsInARectangle(words){
  function longestWordLength (wordsList) {
    return wordsList.reduce(function(longestWord, currWord) {
      if (currWord.length > longestWord.length) return currWord;
      else return longestWord;
    }).length;
  }

  function boxLine(lineLength) {
    return '*'.repeat(lineLength + 4 ) + '\n';
  }

  function wordLine(word,lineLength) {
    return '* ' + word + ' '.repeat(lineLength - word.length) + ' *\n';
  }
  var result =[],
      lineLength = longestWordLength(words);

  result.push(boxLine(lineLength));
  words.forEach(function(word) {
    result.push(wordLine(word,lineLength));
    });
  result.push(boxLine(lineLength));

  return result.join(' ');
}

console.log(wordsInARectangle(["Hello", "World", "in", "a", "frame"]));
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

console.log(wordsInARectangle(["Bigger", "Hello", "World", "in", "a", "frame", "that fits longer words"]));
//  **************************
//  * Bigger                 *
//  * Hello                  *
//  * World                  *
//  * in                     *
//  * a                      *
//  * frame                  *
//  * that fits longer words *
//  **************************

////////////////////// Andreas' solution
function repeat(string, numberOfTimes) {
  var result = '';
  for (var i = 0; i < numberOfTimes; i++)
    result += string;
  return result;
}

function stars(number) {
  return repeat('*', number);
}

console.log(stars(6)); // '******'

function lengthOfLongestWord(words) {
  Math.max.apply(null, words.map(function(word) { return word.length; }));
  // second solution
  // return words.reduce(function(prev, curr) {
  //   return prev.length > curr.length ? prev : curr;
  // }).length;
}

console.log(lengthOfLongestWord(['foo', 'bar', 'baszy'])); // 5

function padWord(word, maxWidth) {
  var difference = maxWidth - word.length;
  return word + repeat(' ', difference);
}

console.log('"' + padWord('foo', 6) + '"'); // 'foo   '

function printRow(string) {
  return '* ' + string + ' *' + '\n';
}

console.log(printRow('foo')); // '* foo *\n'

function wordsInARectangle(words) {
  var longestWord = lengthOfLongestWord(words);
  var longestLine = longestWord + 4;
  var result = stars(longestLine) + '\n';

  words.forEach(function(word, index) {
    result += printRow(padWord(word, longestWord));
  });

  result += stars(longestLine);

  return result;
}


console.log(wordsInARectangle(["Hello", "World", "in", "a", "frame"]));
