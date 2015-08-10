'use strict';
//calculator
var calculator = {
    calculate: calculate
};

function calculate(input){
    var additiveExpression = new RegExp(/([0-9]+ \+ [0-9]+)/g);

    input = input.replace(additiveExpression, sum);
    return parseInt(input);
}

function sum(match) {
    var elements = match.split(" ");
    return parseInt(elements[0]) + parseInt(elements[2]);
}

module.exports = calculator;