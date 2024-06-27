import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(value) {
    if (typeof value !== 'number')
      throw new TypeError('amount must be a number');
    this._amount = value;
  }

  set currency(value) {
    if (!(value instanceof Currency))
      throw new TypeError('currency must a Currency instance');
    this._currency = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      const param = typeof amount !== 'number' ? 'amount' : 'conversionRate';
      throw new TypeError(`${param} must be a number`);
    }
    return amount * conversionRate;
  }
}
