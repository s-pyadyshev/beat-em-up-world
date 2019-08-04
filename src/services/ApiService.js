export default class ApiService {

  // underscore means private part
  _apiBase = 'https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
    }

    return await res.json();
  };

  getFullGames() {
    return this.getResource(`/db.json`);
  }
  // let's make it async
  // async getFullGames() {
  //   const res = await this.getResource(`/db.json`);
  //   return res.results;
  // }

  getNames() {
    return this.getResource(`/names.json`);
  }

  getName = (id) => {
    beatemAPi.getNames().then((names) => {
      console.log(names[id]);
    });
  }
}

const beatemAPi = new ApiService();

// beatemAPi.getFullGames().then((body) => {
//   console.log(body);
// });

beatemAPi.getName(1);


