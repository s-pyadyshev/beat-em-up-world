const filterPlayers = (state = {}, action) => {
    switch (action.type) {
      case 'FILTER_PLAYERS':
        console.log('filtered')
        return state;
      default:
        return state;
    }
};

export default filterPlayers;
