import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get floor() {
    return this._floor;
  }

  set floor(value) {
    if (typeof value !== 'numner') throw new TypeError('floor is not a number');
    this._floor = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
