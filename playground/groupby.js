function groupBy(array, groupingFn){
  var groupings = {};
  var key;
  for (i = 0; i <array.length; i++) {
    key = groupingFn(array[i]);
    if (!groupings[key]) {
      groupings[key] = [];
    }
    groupings[key].push(array[i]);
  }
  return groupings;
}

console.log(groupBy([1,2,3,4,5,6], function(i){return i%3;}));
