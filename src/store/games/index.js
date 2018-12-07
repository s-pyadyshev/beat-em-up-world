export const types = {
  GET_GAMES_START: 'GET_GAMES_START',
  GET_GAMES_SUCCESS: 'GET_GAMES_SUCCESS',
  GET_GAMES_FAILURE: 'GET_GAMES_FAILURE',

  GET_GAMES_FILTER_START: 'GET_GAMES_FILTER_START',
  GET_GAMES_FILTER_SUCCESS: 'GET_GAMES_FILTER_SUCCESS',
  GET_GAMES_FILTER_FAILURE: 'GET_GAMES_FILTER_FAILURE',
};

export const getGamesStart = () => {
  return {
    type: types.GET_GAMES_START
  };
};

export const getGamesSuccess = response => {
  return {
    type: types.GET_GAMES_SUCCESS,
    payload: response
  };
};

export const getGamesFailure = () => {
  return {
    type: types.GET_GAMES_START
  };
};


const initialState = {
  games: [],
  loaders: {
    games: false
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_GAMES_START:
      return {
        ...state,
        loaders: {
          ...state.loaders,
          games: true
        }
      };

    case types.GET_GAMES_SUCCESS:
      return {
        ...state,
        loaders: {
          ...state.loaders,
          games: false
        }
      };

    case types.GET_GAMES_FAILURE:
      return {
        ...state,
        loaders: {
          ...state.loaders,
          games: false
        }
      };

    case types.CLEAR_GAMES_STORE:
      return {
        ...initialState
      };

  //   case types.GET_GAMES_FILTER_START:
  //   return {
  //     ...state,
  //     loaders: {
  //       ...state.loaders,
  //       filter: true
  //     }
  //   };
  
  // case types.GET_GAMES_FILTER_SUCCESS:
  //   return {
  //     ...state,
  //     filter: action.payload,
  //     loaders: {
  //       ...state.loaders,
  //       filter: false
  //     }
  //   };
  
  // case types.GET_GAMES_FILTER_FAILURE:
  //   return {
  //     ...state,
  //     loaders: {
  //       ...state.loaders,
  //       filter: false
  //     }
  //   };

    default:
      return state;
  }
}
