const fetchGames = (state = {}, action) => {
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
