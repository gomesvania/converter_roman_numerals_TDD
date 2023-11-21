import exp from "constants";
import { IntToRoman } from ".";

beforeEach(() => {
  // ...
});

afterEach(() => {
  // ...
});

describe('Int to Roman', () => {
  it('should not accept input letters', () => {
    const roman = new IntToRoman();
    const converted = roman.convert('a');
    
    expect(converted).toBe('Invalid data, please enter an integer');
  
  });

  it('should not accept negative numbers for input', () => {
    const roman = new IntToRoman();
    const converted = roman.convert(-5);
    
    expect(converted).toBe('Invalid data, please enter an integer');
  });

  it('should not accept input decimal numbers', () => {
    const roman = new IntToRoman();
    const converted = roman.convert(5.5);
    
    expect(converted).toBe('Invalid data, please enter an integer');
  });

  it('the largest number to be converted, must be the number 100', () => {
    const roman = new IntToRoman();
    const converted = roman.convert(110);
    
    expect(converted).toBe('Invalid data, please enter an integer');
  })
  
  it('the method convert should convert the integer 1 into Roman numeral I', () => {
    const roman = new IntToRoman();
    const converted = roman.convert(1);
    
    expect(converted).toBe('I');
  });

  it('number that is greater than 1 and less than 4', () => {
    const roman = new IntToRoman();
    const converted = roman.convert(3);
    
    expect(converted).toBe('III');
  });

  it('the method convert should return V when is passed 5', () => {
    const roman = new IntToRoman();
    const converted = roman.convert(5);
    
    expect(converted).toBe('V');
  });

  it('the method convert should return IX when is passed 9', () => {
    const roman = new IntToRoman();
    const converted = roman.convert(9);
    
    expect(converted).toBe('IX');
  });

  it('the method convert should return X when is passed 10', () => {
    const roman = new IntToRoman();
    const converted = roman.convert(10);
    
    expect(converted).toBe('X');
  });

  it('number that is greater than 5 and less than 9', () => {
    const roman = new IntToRoman();
    const converted = roman.convert(7);

    expect(converted).toBe('VII');
  });

  it('the method convert should return L when is passed 50', () => {
    const roman = new IntToRoman();
    const converted = roman.convert(50);
    
    expect(converted).toBe('L');
  });

  it('the method convert should return C when is passed 100', () => {
    const roman = new IntToRoman();
    const converted = roman.convert(10);
    
    expect(converted).toBe('C');
  });
});