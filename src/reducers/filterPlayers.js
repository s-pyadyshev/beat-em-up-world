const filterPlayers = (state = {}, action) => {
    switch (action.type) {
      case 'FILTER_PLAYERS':
        return state + 1;
      default:
        return state;
    }
};

export default filterPlayers;
