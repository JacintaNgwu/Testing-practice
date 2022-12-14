const { expect } = require('@jest/globals');
const {stringLength, reverseString, Calculator, capitalize} =  require('./task.js');


test('count string character', () => {
    expect(stringLength('jacinta')).toBe(7);
    expect(() => {
      stringLength("thisStringExceeds10characters")
    }).toThrow(Error);

  });
  
  test('reverses the string', () => {
    expect(reverseString('welcome')).toBe('emoclew');
  });


describe ('Calculator' ,() => {
    test('should return the sum of two numebers', () => {
      expect( Calculator.add(5, 2)).toEqual(7)
      expect( Calculator.add(12, 8)).toEqual(20)
      expect( Calculator.add(8, 9)).toEqual(17)
    });

    test('should return the diffence between larger and smaller number', () => {
      expect( Calculator.subtract(27, 5)).toEqual(22)
      expect( Calculator.subtract(35, 9)).toEqual(26)
      expect( Calculator.subtract(40, 15)).toEqual(25)
    });

    test('should return the quotient of two numbers', () => {
      expect( Calculator.divide(60, 4)).toEqual(15)
      expect( Calculator.divide(25, 5)).toEqual(5)
      expect( Calculator.divide(90, 3)).toEqual(30)
    });

    test('should return the product of two numbers', () => {
      expect( Calculator.multiply(12, 7)).toEqual(84)
      expect( Calculator.multiply(30, 5)).toEqual(150)
      expect( Calculator.multiply(10, 7)).toEqual(70)
    });
  })

  test('capitalize the first character', () => {
    expect(capitalize('jacinta')).toBe('Jacinta');
  });