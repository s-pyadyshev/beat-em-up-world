const URL =
  "https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/db.json";

const URL_FILTERS =
  "https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/filter.json";

function handleErrors(response: any) {
  if (!response.ok) {
    throw Error(`${response.status}: ${response.statusText}`);
  }
  return response;
}

export const Games = {
  get: () =>
    fetch(URL)
      .then(handleErrors)
      .then((res) => res.json())
      .catch((error) => console.log(error)),
  getById: (id: any) =>
    fetch(URL)
      .then(handleErrors)
      .then((res) => res.json())
      .then(
        (data) =>
          data.filter(
            (game: any) =>
              `${game.name}[${game.platform}]`
                .replace(/\s/g, "")
                .toLowerCase() === id
          )[0]
      )
      .catch((error) => console.log(error)),
};

export const Filters = {
  get: () =>
    fetch(URL_FILTERS)
      .then(handleErrors)
      .then((res) => res.json())
      .catch((error) => console.log(error)),
};

export default Games;
