export default class ApiService {

  // underscore means private part
  _apiBase = 'https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      // throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
      throw new Error('Error');
    }

    return await res.json();
  };

  getGames = async () => {
    const result = await this.getResource(`/db.json`);
    return result;
  }

  // getGames() {
  //   return this.getResource(`/db.json`);
  // }
  // let's make it async
  getRandomGame = async () => {
    const result = await this.getResource(`/db.json`);
    return result.map(this._transformGame);
  }
  // the age of heroes, the crystal kings - missing cover

  // refactor async getNames() function to arrow function to keep "this" for getData passed as props
  getNames = async () => {
    const result = await this.getResource(`/db.json`);
    return result.map((game) => game.name);
  }

  // getGame(id) {
  //   return this.getRandomGame().then((games) => games[id]);
  // }
  getRandomGameCard = async (id) => {
    const game = await this.getRandomGame().then((games) => games[id]);
    return {
      name: game.name,
      platform: game.platform,
      cover: game.cover
    }
  }

  getGameCard = async (id) => {
    const game = await this.getGames().then((games) => games[id]);
    return {
      name: game.name,
      platform: game.platform,
      about: game.about,
      trivia: game.trivia,
      developer: game.developer,
      publisher: game.publisher,
      releasedate: game.releasedate,
      otherPlatforms: game.otherPlatforms,
      series: game.series,
      players: game.players,
      structure: game.structure,
      difficulty: game.difficulty,
      gangsize: game.gangsize,
      variety: game.variety,
      playtime: game.playtime,
      buttons: game.buttons,
      combos: game.combos,
      grabs: game.grabs,
      dashing: game.dashing,
      enemyHBars: game.enemyHBars,
      itemPickup: game.itemPickup,
      itemStay: game.itemStay,
      weaponsStay: game.weaponsStay,
      deathBlow: game.deathBlow,
      friendlyFire: game.friendlyFire,
      charSwitch: game.charSwitch,
      groundHit: game.groundHit,
      revive: game.revive,
      restore: game.restore,
      artStyle: game.artStyle,
      sprites: game.sprites,
      setting: game.setting,
      focus: game.focus,
      music: game.music,
      tone: game.tone,
      fighters: game.fighters,
      stages: game.stages,
      enemies: game.enemies,
      bosses: game.bosses,
      weapons: game.weapons,
      lives: game.lives,
      continues: game.continues,
      extend: game.extend,
      overallReview: game.overallReview,
      cover: game.cover,
      images: game.images
    }
  }

  _transformGame = async (game) => {
    return {
      name: game.name,
      platform: game.platform,
      cover: game.cover
    }
  }
}

// const beatemAPi = new ApiService();

// beatemAPi.getFullGames().then((body) => {
//   console.log(body);
// });

// console.log(beatemAPi.getNames());