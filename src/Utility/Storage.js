/*global chrome*/
const { storage } = chrome;
/**
 * Store item to chrome storage
 * @param {String} key
 * @param {String} value
 * @param {String} disk
 */
export function store(key, value, disk = "local") {
  storage[disk].set({ [key]: value });
}

/**
 * Get item from chrome storage
 * @param {String} key
 * @param {Function} callback
 * @param {String} disk
 */
export function get(key, callback, disk = "local") {
  return storage[disk].get([key], (result) => callback(result[key]));
}
