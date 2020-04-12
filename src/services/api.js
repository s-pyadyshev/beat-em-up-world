const URL = 'https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/db.json';

export const Games = {
  get: () => fetch(URL)
    .then((res) => res.json()),
  // .then(data => data)
};

export default Games;
