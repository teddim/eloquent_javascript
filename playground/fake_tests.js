// FAKE TESTS... USE NODE TO RUN IN TERMINAL
var actual = plantCount(['blue mustard']);
var expected = {'blue mustard': 1};
console.log('actual:  ', actual);
console.log('expected:', expected);

// actual = plantCount(['blue mustard', 'mustard']);
// expected = {'blue mustard': 1, 'mustard': 1};
// console.log('actual:  ', actual);
// console.log('expected:', expected);
//
// actual = plantCount(['blue mustard', 'wood sorrel']);
// expected = {'blue mustard': 1, 'wood sorrel': 1};
// console.log('actual:  ', actual);
// console.log('expected:', expected);
//
// actual = plantCount(['blue mustard', 'wood sorrel', 'nettles']);
// expected = {'blue mustard': 1, 'wood sorrel': 1, 'nettles': 1};
// console.log('actual:  ', actual);
// console.log('expected:', expected);
//
// actual = plantCount(['blue mustard', 'wood sorrel', 'nettles', 'wood sorrel']);
// expected = {'blue mustard': 1, 'wood sorrel': 2, 'nettles': 1};
// console.log('actual:  ', actual);
// console.log('expected:', expected);
//
// actual = plantCount(['blue mustard', 'wood sorrel', 'nettles', 'wood sorrel', 'dandylion', 'red clover', 'unidentified mustard', 'yarrow', 'dandylion', 'wood sorrel', 'hen-of-the-woods', 'nettles', 'violets', 'dandylion']);
// expected = { 'blue mustard': 1,
//   'wood sorrel': 3,
//   'nettles': 2,
//   'dandylion': 3,
//   'red clover': 1,
//   'unidentified mustard': 1,
//   'yarrow': 1,
//   'hen-of-the-woods': 1,
//   'violets': 1 };
// console.log('actual:  ', actual);
// console.log('expected:', expected);
