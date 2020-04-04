/**
 * Wait a minimum amount of time for a promise to resolve.
 * Useful for testing UI/X of latency or if you just want to
 * make the content feel less jumpy
 * 
 * @async
 * @param {Promise|Promise[]|number} [promises = []] - a Promise or array of promises that all need to be resolved. if a number is provided instead, it will just wait that amount of time
 * @param {number} [minimumWaitTime = 420] - the minimum wait time
 * @return {Promise} a new promise that resolves the provided promise after the minimum wait time
 */
const wait = async (promises = [], minimumWaitTime = 420) => {

  if (typeof promises === 'number') {
    return new Promise(res => setTimeout(res, promises));
  }

  const multiplePromisesProvided = Array.isArray(promises);

  const arrayOfPromises = multiplePromisesProvided
    ? promises
    : [promises];

  const resolved = (await Promise.all([
    ...arrayOfPromises,
    new Promise(resolve => setTimeout(resolve, minimumWaitTime))
  ])).slice(0, arrayOfPromises.length);

  return multiplePromisesProvided
    ? resolved
    : resolved[0];
};

export default wait;
