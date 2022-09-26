import Race from './Race';

export default class Elf extends Race {
  private _max: number;
  static _instance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._max = 99;
    Elf._instance += 1;
  }

  get maxLifePoints() {
    return this._max;
  }

  static createdRacesInstances() {
    return Elf._instance;
  }
}