

function make_grid(char1, char2, size) {
  var even_grid = (size%2 === 0)
  var toggle_char = true;
  var newline = '\n';
  var rows = '';

  for (var width = 1; width < size*size + 1; width++) {
    end_of_line = (width%size === 0)
    if (toggle_char) {
      rows += char1;
    }
    else {
      rows += char2;
    }
    if (end_of_line && even_grid) {
      rows += newline;
      toggle_char = !toggle_char;
    }
    else if (end_of_line && !even_grid) {
      rows += newline;
    }

    toggle_char = !toggle_char;
  }
  return rows;
}


  console.log("1x1 grid:\n" + make_grid("_", "#", 1));
  console.log("2x2 grid:\n" + make_grid("_", "#", 2));
  console.log("3x3 grid:\n" + make_grid("_", "#", 3));
  console.log("4x4 grid:\n" + make_grid("_", "#", 4));
  console.log("5x5 grid:\n" + make_grid("_", "#", 5));
  console.log("8x8 grid:\n" + make_grid("_", "#", 8));
