var start_char = '*';

var obj = new Object({
  start_char: '_',
  fill_char: '#',

  swap: function() {
    var tmp = start_char;
    this.start_char = this.fill_char;
    this.fill_char = tmp;
    console.log("inside swap:" + this.start_char + this.fill_char);
  }
});

console.log("before swap:" + obj.start_char + obj.fill_char);
console.log(obj.swap());
console.log("after swap:" + obj.start_char + obj.fill_char);
