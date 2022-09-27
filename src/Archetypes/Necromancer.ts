import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energy: EnergyType;
  static _instance = 0;

  constructor(name: string) {
    super(name);
    this._energy = 'mana';
    Necromancer._instance += 1;
  }

  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances() {
    return Necromancer._instance;
  }
}