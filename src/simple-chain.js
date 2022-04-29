const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  value : [],
  getLength() {
    return this.value.length;
  },
  addLink(value = '') {
    if (this.value === undefined) {
      this.value = []
    }
    this.value.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || position > this.value.length) {
      this.value.length = 0;
      throw new Error(`You can't remove incorrect link!`);
    };
    this.value = this.value.filter((item, index) => index !== position - 1);
    return this;
  },
  reverseChain() {
    this.value = this.value.reverse();
    return this;
  },
  finishChain() {
    const result = this.value.join('~~');
    this.value.length = 0;
    return result;
  }
};

module.exports = {
  chainMaker
};
