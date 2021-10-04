import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  let result = '';
  let check = false;
  for (const letter of email) {
    
    if (check) {
      result = `${result}${letter}`;
    }
    if (letter == '@') {
      check = true
    }
  }
   return email = result;
  //return result 
  // let index = email.indexOf('@') + 1;
   //return email = email.slice(index, email.length);
}
console.log(getEmailDomain('.unusual.com@usual.com'));
