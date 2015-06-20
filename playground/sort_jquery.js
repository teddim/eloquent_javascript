/* reverse alphabetical */
$( ".reverse" ).html(function() {
  var sorted = $( "ul.reverse > li" ).sort(function (a, b) {
    return $(a).text() < $(b).text();
  })
  return sorted;
});

/* alphabetical */
$( ".regular" ).html(function() {
 	var sorted = $( "ul.regular li" ).sort(function (a, b) {
    return $(a).text() > $(b).text();
  })
  return sorted;
});

////////////////

$(document).ready(function() {
  $('ul li').sort(asc_sort).appendTo('ul');

  function asc_sort(a, b){
    return ($(a).text()) < ($(b).text()) ? 1 : -1;
	}
});

///////////////

$(document).ready(function() {
  var array = $('li');

  var sort = function(array){
    results = [];
    $.each(array, function(index, element){
      results.push(element.innerText);
    });
    results.sort()
    for (var i = 0; i < array.length; i++) {
      array[i].innerText = results[i];
    }
  };

  var reverse = function(array){
    results = [];
    $.each(array, function(index, element){
      results.push(element.innerText);
    });
    results.sort();
    results.reverse();
    for (var i = 0; i < array.length; i++) {
      array[i].innerText = results[i];
    }
  };

  var random = function(array) {
    results = [];
    $.each(array, function(index, element){
      results.push(element.innerText);
    });
    for (var i = 0; i < array.length; i++) {
      array[i].innerText = results[Math.floor((Math.random() * array.length) - 1)];
    }
  };

  $(document).on('click', '.sort', function(){
    sort(array);
  })

  $(document).on('click', '.reverse', function(){
    reverse(array);
  })
})
