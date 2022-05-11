const sum = require('./sum');

describe('verifica soma', () =>{
    test('verifica soma de dois numeros', () =>{
        expect(sum(1,3)).toBe(4);
    });
});