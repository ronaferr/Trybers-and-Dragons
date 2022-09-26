import Race from './Race';

export default class Orc extends Race {
  private _max: number;
  static _instance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._max = 74;
    Orc._instance += 1;
  }

  get maxLifePoints() {
    return this._max;
  }

  static createdRacesInstances() {
    return Orc._instance;
  }
}