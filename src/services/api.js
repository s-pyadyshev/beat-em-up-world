import axios from "axios";

const URL = "https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/db.json";

export const Games = {
  get: () => {
    return fetch(URL)
      .then(res => res.json())
      // .then(data => data)
      // .catch(err => console.error(err));
    // return axios.get(URL);
  },
  getById: () => {

  }
}
