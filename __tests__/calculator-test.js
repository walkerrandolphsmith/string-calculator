// __tests__/calculator-test.js
jest.dontMock('../src/calculator');

describe('../src/calculator', function(){
    var sut;
    beforeEach(function () {
        sut = require('../src/calculator');
    });
    describe('given an input of 0', function () {
        var input = "0";
        var actual;
        beforeEach(function () {
            actual = sut.calculate(input);
        });
        it('it should produce 0', function () {
            expect(actual).toEqual(0);
        });
    });
    describe('given an input of 5', function () {
        var input = "5";
        var actual;
        beforeEach(function () {
            actual = sut.calculate(input);
        });
        it('it should produce 5', function () {
            expect(actual).toEqual(5);
        });
    });
});