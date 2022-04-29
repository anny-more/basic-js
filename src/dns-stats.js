const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  const matrix = domains.map(item => item.split('.'));
  const result = {};
  matrix.forEach(function(el) {
    let domainName = '';
    for (let i = el.length - 1; i >= 0; i -= 1) {
      domainName = `${domainName}.${el[i]}`;
      if (result.hasOwnProperty(domainName)) {
        result[domainName] += 1;
      } else {
        result[domainName] = 1;
      }
    }
  })
  return result
}

module.exports = {
  getDNSStats
};
