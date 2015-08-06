'use strict';
//calculator
var sum = require("./sum");

var calculator = {
    calculate: calculate
};

function calculate(input){
    return parseInt(input);
}

module.exports = calculator;