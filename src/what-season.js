import { timeSpanToString } from '../../anny-more-JSFE2021Q3/core-js-101/src/04-date-tasks.js';
import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  const season = {11: 'winter', 0: 'winter', 1: 'winter', 2: 'spring', 3: 'spring', 4: 'spring', 5: 'summer', 6: 'summer', 7: 'summer', 8: 'fall', 9: 'fall', 10: 'fall'};
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }
  if ((date instanceof Date === false || Object.getOwnPropertyNames(date).length > 0) && arguments.length > 0) {
    throw new Error('Invalid date!');
  }
  return season[(new Date(date)).getMonth()];
}