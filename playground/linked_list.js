var input = ["a","b","c"];

var result = {
  value: input[0],
  rest: null

};


result.rest = {
  value: input[1],
  rest: null
};

var result3 = {
  value: input[2],
  rest: null
};

result2.rest = result3;

console.log(result);
