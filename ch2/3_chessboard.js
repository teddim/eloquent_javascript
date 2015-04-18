
function make_grid(size) {
  var newline = '\n';
  var rows = '';

  var obj = new Object({
    start_char: ' ',
    fill_char: '#',

    swap: function() {
      var tmp = this.start_char;
      this.start_char = this.fill_char;
      this.fill_char = tmp;
    }
  });

  for (var width = 1; width < size*size + 1; width++) {

    if (width%2 === 0) {
    rows += obj.start_char;
    }
    else {
    rows += obj.fill_char;
    }

    if (width%size === 0) {
      rows += newline;
      if (size%2 === 0) {
        obj.swap();
      }
    }
  }
  return rows;
}

  console.log("1x1 grid:\n" + make_grid(1));
  console.log("2x2 grid:\n" + make_grid(2));
  console.log("3x3 grid:\n" + make_grid(3));
  console.log("4x4 grid:\n" + make_grid(4));
  console.log("5x5 grid:\n" + make_grid(5));
  console.log("8x8 grid:\n" + make_grid(8));
