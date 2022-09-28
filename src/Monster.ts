import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor(lifePoints = 85, strength = 63) {
    this._lifePoints = lifePoints;
    this._strength = strength;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  attack(enemy: SimpleFighter): void { 
    const damage = this._strength;
    enemy.receiveDamage(damage);
  }

  receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;
    if (attackPoints < 0) this._lifePoints = -1;
    return this._lifePoints;
  }
}