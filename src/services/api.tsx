export const URL =
  "https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/db.json";

export const URL_FILTERS =
  "https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/filter.json";

export const getResource = async (url: any) => {
  const res = await fetch(url);
  const body = await res.json();
  return body;
};

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

export default class ApiService {
  getGames = async (URL: any) => {
    const res = await fetch(URL);

    if (!res.ok) {
      throw new Error(`Could not fetch ${URL}` + `, received ${res.status}`);
    }
    return await res.json();
  };

  getFilters = async (URL_FILTERS: any) => {
    const res = await fetch(URL_FILTERS);

    if (!res.ok) {
      throw new Error(
        `Could not fetch ${URL_FILTERS}` + `, received ${res.status}`
      );
    }
    return await res.json();
  };
}
