'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString !== undefined) {
    const newAr = [];
    const key = [];
    const value = [];
    let rest;
    let count;
    const values = [];
    const keys = [];
    const arr = sourceString.split(';');

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== '') {
        newAr[newAr.length] = arr[i].trim().split(':');
      }
    }

    for (let i = 0; i < newAr.length; i++) {
      if (typeof newAr[i] === 'object') {
        [count, ...rest] = newAr[i];
        value[value.length] = rest.join('');
        key[key.length] = count;
      };
    };

    for (let i = 0; i < value.length; i++) {
      if (value[i] !== '') {
        values[values.length] = value[i].trim();
      }
    };

    for (let i = 0; i < key.length; i++) {
      if (key[i] !== '') {
        keys[keys.length] = key[i].trim();
      }
    };

    const result = Object.assign(...keys.map((k, i) => ({ [k]: values[i] })));

    return result;
  }
}

module.exports = convertToObject;
