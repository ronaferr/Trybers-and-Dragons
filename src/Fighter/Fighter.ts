import SimpleFighter from './SimpleFighter';

export default interface Fighter extends SimpleFighter {
  defense: number,
  levelUp: () => void,

  special(enemy: Fighter): void;
}