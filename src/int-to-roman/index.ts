import { IntToRoman } from './IntToRoman';

class Main {
  public static main(): void {
    const converter = new IntToRoman(5, {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    });

    const converted = converter.convertRomanNumber('V');

    console.log(converted);
  }
}
