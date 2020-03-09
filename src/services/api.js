const URL = "https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/db.json";

const api = () => {
  fetch(URL)
    .then(res => res.json())
    .then(result => result);
}

export default apiService;
