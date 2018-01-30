'use strict';

export const promisify = fn => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn(...args, (error, data) => {
        if (error) {
          return reject(error);
        }
        return resolve(data);
      });
    });
  };
};
