export const URL =
  "https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/db.json";

export const URL_FILTERS =
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
      .then((res) => res.json()),
};

export const Filters = {
  get: () =>
    fetch(URL_FILTERS)
      .then(handleErrors)
      .then((res) => res.json()),
};
