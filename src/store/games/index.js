const initialGames = () => {
  const URL = "https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/beatemups.json";
  fetch(URL)
    .then(response => response.json())
    .then(games => games)
}

const fetchGames = (state = initialGames, action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
          return state;
        case "FETCH_SUCCESS": 
          return {...state, games: action.payload};
        default:
          return state;
      }
};

export default fetchGames;
