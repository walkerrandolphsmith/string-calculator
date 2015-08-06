'use strict';
//calculator
var sum = require("./sum");

var calculator = {
    calculate: calculate
};

function calculate(input){
    var inputs = input.split(' ');
    if(inputs.length > 1)
        return parseInt(inputs[0]) + parseInt(inputs[2]);
    return parseInt(input);
}

module.exports = calculator;