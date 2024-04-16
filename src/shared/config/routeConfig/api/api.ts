import axios from "axios";

export const $api = axios.create({
  baseURL:
    "https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/db.json",
});
