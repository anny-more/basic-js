const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(cond = true) {
    this.isReverse = cond;
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  };
  
  encrypt(str, kod) {
    if (arguments.length < 2 || (typeof(str) !== 'string') || (typeof(kod) !== 'string')) {
      throw new Error('Incorrect arguments!');
    };
    const array = str.split('');
    let key = "";
    while (key.length < array.length) {
      key = key + kod;
    }
    key = key.split('').map(item => item = this.alphabet.indexOf(item.toUpperCase()) >= 0 ? this.alphabet.indexOf(item.toUpperCase()) : item);
    key.length = array.length;
    let letterKod = array.map(item => 
      item = this.alphabet.indexOf(item.toUpperCase()) >= 0 ? this.alphabet.indexOf(item.toUpperCase()) : item);
    
    let i = 0;
    let lKod = letterKod.map((item, index) => {
      if (typeof(item) === 'number') {
        return item = this.alphabet[item + key[index - i] > 25 ? item + key[index - i] - 26 : item + key[index - i]];
      } else {
        i++;
        return item = item;
      }
    });
    if (this.isReverse) {
      return lKod.join('');
    } else {
      return lKod.reverse().join('');
    }
  }

  decrypt(str, kod) {
    if (arguments.length < 2 || (typeof(str) !== 'string') || (typeof(kod) !== 'string')) {
      throw new Error('Incorrect arguments!');
    }
    const array = str.split('');
    let key = "";
    while (key.length < array.length) {
      key = key + kod;
    }
    key = key.split('').map(item => item = this.alphabet.indexOf(item.toUpperCase()) >= 0 ? this.alphabet.indexOf(item.toUpperCase()) : item);
    key.length = array.length;
    let letterKod = array.map(item => 
      item = this.alphabet.indexOf(item.toUpperCase()) >= 0 ? this.alphabet.indexOf(item.toUpperCase()) : item);
    
    let i = 0;
    let lKod = letterKod.map((item, index) => {
      if (typeof(item) === 'number') {
        return item = this.alphabet[(item - key[index - i]) < 0 ? (26 + item - key[index - i]) : (item - key[index - i])];
      } else {
        i++;
        return item = item;
      }
    });
    if (this.isReverse) {
      return lKod.join('');
    } else {
      return lKod.reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
