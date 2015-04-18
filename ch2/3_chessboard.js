var char1 = ' ';
var char2 = '#';
var newline = '\n';
var rows = '';
var size = 5;
var even_grid = (size%2 === 0)
var toggle_char = true;

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

  console.log(rows);
