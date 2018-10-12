/**
 * Mocking client-server processing
 */
import _repos from './repos.json';

const TIMEOUT = 100;

export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(_repos), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}