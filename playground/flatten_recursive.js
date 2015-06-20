var flatten = function(array)
  {
    var array_length = array.length;
    var flattened_array;
    for (var i = 0; i < array.length-1; i++)
      {
        if(array instanceof Array)
          {
            flattened_array.push(array[i]);
          }
        else
          {
            flatten(array[0]);
          }
      }

    return array;
  };

  flatten([[1,2,3], [4,5,6]]);
  console.log(array);
