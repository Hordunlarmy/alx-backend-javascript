export default class Airport {
  constructor(name, code) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(value) {
    if (typeof value !== 'string') throw new TypeError('code is not a string');
    this._code = value;
  }

  set name(value) {
    if (typeof value !== 'string') throw new TypeError('name is not a string');
    this._name = value;
  }

  get [Symbol.toStringTag]() {
    return `${this.code}`;
  }
}
