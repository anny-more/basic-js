import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

export default function renameFiles(names) {
  let result = [];
  for (let name of names) {
    //let temp = name;
    //if (result.length == 0) {

    let i = 1;
    let temp = name;
    while (result.includes(temp)) {
        temp = `${name}(${i})`;
        i++;
      }
    result.push(temp);
  }
return result;
}
console.log(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']));
//['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)']