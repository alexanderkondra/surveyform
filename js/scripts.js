// Business (or back-end) logic:

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// User interface (or front-end) logic:

$(document).ready(function() {
  $("#adding").click(function(event) {
   event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var resultAdd = add(number1, number2);
    $("#addOut").text(resultAdd);
  });
  $("#substracting").click(function(event) {
   event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var resultSub = subtract(number1, number2);
    $("#subOut").text(resultSub);
  });
  $("#multiplying").click(function(event) {
   event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var resultMult = multiply(number1, number2);
    $("#multOut").text(resultMult);
  });
  $("#divide").click(function(event) {
   event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var resultDiv = divide(number1, number2);
    $("#divOut").text(resultDiv);
  });
});
