// Write a named function that takes the following object and converts it to a string

var obj = {
  subject: "What if sorrows swim?",
  date: "11/11/11",
  from: "Me@mail.com",
  to: "You@mail.com"
};

function generateTableRow(obj) {
  var string = "<tr><td class='date'>" + obj.date + "</td><td>" + obj.subject + "</td><td><span class='archive'>Archive</span><span class='delete'>Delete</td></tr>";

  return string;
}
console.log(generateTableRow(obj));

// "<tr><td class="date">11/11/11</td><td>What if sorrows swim?</td><td><span class="archive">Archive</span><span class="delete">Delete</td></tr>"


$(document).ready(function() {
  $('tbody').append(generateTableRow(obj));
});

// THEN, add the string to the table body in the html. You should visually see the data in the Output tab.
