const URL =
  "https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/db.json";

const URL_FILTERS =
  "https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/filter.json";

export const Games = {
  get: () => fetch(URL).then((res) => res.json()),
  getById: (id: any) =>
    fetch(URL)
      .then((res) => res.json())
      .then(
        (data) =>
          data.filter(
            (game: any) =>
              `${game.name}[${game.platform}]`
                .replace(/\s/g, "")
                .toLowerCase() === id
          )[0]
      ),
};

export const Filters = {
  get: () => fetch(URL_FILTERS).then((res) => res.json()),
};

export default Games;
