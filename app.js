class Wrapper {
  constructor() {
    const readline = require('readline');
    const io = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    io.question('Podaj liczbę dziesiętną: ', decimalNumber => {
      io.question(
        'Podaj ilość bitów do wyświetlenia (Wciśnij ENTER by dobrać automatycznie): ',
        binaryLength => {
          const result = new Dec2bin(decimalNumber, binaryLength);
          console.table({
            Dziesiętnie: decimalNumber,
            Binarnie: result.filledBin
          });
          io.close();
        }
      );
    });
  }
}

class Dec2bin {
  constructor(decimalNumber, binaryLength) {
    const decimal = parseInt(decimalNumber);
    const fillTo = parseInt(binaryLength);
    const binary = decimal.toString(2);
    if (binary.length !== fillTo) {
      this.fillString = '';
      for (let i = binary.length; i < fillTo; i++) {
        this.fillString += '0';
      }
      this.filledBin = this.fillString + binary;
    } else {
      this.filledBin = binary;
    }
  }
}

new Wrapper();
