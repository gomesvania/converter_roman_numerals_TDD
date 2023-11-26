export class IntToRoman {
  numberConverted: number;
  romanNumber: { [romanNumber: string]: number };

  constructor( numberConverted: number, romanNumber: { [romanNumber: string]: number } ) {
    this.numberConverted = numberConverted;
    this.romanNumber = romanNumber;
  }

  convertRomanNumber(roman: string) {
    this.numberConverted = 0;

    // Itera sobre a string romana da direita para a esquerda <---
    for (let counter = roman.length - 1; counter >= 0; counter--) {
      const currentRomanNumber = this.romanNumber[roman[counter]];
      const romanNumberChanged = this.romanNumber[roman[counter + 1]];

      while (this.numberConverted !== undefined) {
        // Verifica se o numeral atual é menor ou igual ao numeral à direita
        if (
          currentRomanNumber <= romanNumberChanged
        ) {
          this.numberConverted += currentRomanNumber;
        } else {
          this.numberConverted -= currentRomanNumber;
        }
      }
    }

    return this.numberConverted;
  }

  printResult() {
    console.log(`Número Romano: ${this.numberConverted}`);
  }
}
