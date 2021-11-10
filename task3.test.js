const { expect } = require('@jest/globals');
const Calculator = require('./task3.js');
describe('calcoulater doing well', () => {
    test('add', () => {
        expect(Calculator.add(5, 4)).toBe(9);
    });
    test('substract', () => {
        expect(Calculator.substract(6, 4)).toBe(2);
    });
    test('divide', () => {
        expect(Calculator.divide(6, 2)).toBe(3);
    });
    test('multiply', () => {
        expect(Calculator.multiply(6, 4)).toBe(24);
    });
})
