import { BingoInterface } from "./Bingo";

export interface GameCardInterface {
  missing?: Boolean;
  multigenre?: string;
  name: string;
  platform: string;
  perspective: string;
  country?: string;
  about: string;
  trivia: string;
  developer: string;
  publisher: string;
  releaseYear: number;
  otherPlatforms: string[] | null;
  series: string | null;
  players: number;
  structure: string;
  difficulty: string;
  gangsize: string;
  variety: string[];
  playtime: string;
  buttons: string;
  combos: string;
  grabs: string;
  dashing: string;
  enemyHBars: string;
  itemPickup: string;
  itemStay: string;
  weaponsStay: string;
  deathBlow: string;
  friendlyFire: string;
  charSwitch: string;
  groundHit: string;
  revive: string;
  restore: string;
  artStyle: string;
  sprites: string;
  setting: string;
  focus: string;
  music: string[];
  tone: string;
  gore?: string;
  fighters: number | null;
  stages: number | null;
  enemies: number | null;
  bosses: number | null;
  weapons: string[] | null;
  lives?: number | null;
  continues: number | null;
  extend: number | null;
  overallReview: string;
  cover: string;
  links: string[];
  images: string[];
  videos: string[];
  beatemupBingo: BingoInterface;
}
