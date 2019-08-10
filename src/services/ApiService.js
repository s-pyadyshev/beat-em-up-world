export default class ApiService {

  // underscore means private part
  _apiBase = 'https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      // throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
      throw new Error('Error');
    }

    return await res.json();
  };

  // getGames() {
  //   return this.getResource(`/db.json`);
  // }
  // let's make it async
  async getGames() {
    const result = await this.getResource(`/db.json`);
    return result.map(this._transformGame);
  }
  // the age of heroes - missing cover

  async getNames() {
    const result = await this.getResource(`/db.json`);
    return result.map((game) => game.name);
  }

  // getGame(id) {
  //   return this.getGames().then((games) => games[id]);
  // }
  async getGame(id) {
    const game = await this.getGames().then((games) => games[id]);
    return this._transformGame(game);
  }

  _transformGame(game) {
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

// console.log(beatemAPi.getGames());