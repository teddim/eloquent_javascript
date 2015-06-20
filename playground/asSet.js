function Set(array) {
  this.array = array;
}

Set.prototype.asSet = function() {
  for (var i = 0; i < this.array.length; i++) {
    if (this.setArray.indexOf(this.array[i]) == -1) {
      this.setArray.push(this.array[i]);
    }
  }
  return this.setArray;
};

Set.prototype.toString = function() {
  return "{" + this.asSet().join() + "}";
};

var set = new Set([11,2,3,4,2,2,4,3]);
console.log(set.asSet()); // [11,2,3,4]
console.log(set.toString()); // {11, 2, 3, 4}

var wordSet = new Set(['foo', 'foo', 'bar', 'bar', 'baz', 'ski', 'bar', undefined, undefined]);
console.log(wordSet.asSet()); // ['foo','bar', 'baz', 'ski', undefined]
console.log(wordSet.toString()); // {'foo','bar', 'baz', 'ski', }
