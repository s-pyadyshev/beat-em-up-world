// import { post, get } from '../../utils/api';

export const types = {
  GET_GAMES_START: 'GET_GAMES_START',
  GET_GAMES_SUCCESS: 'GET_GAMES_SUCCESS',
  GET_GAMES_FAILURE: 'GET_GAMES_FAILURE',
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

    default:
      return state;
  }
}

// export const getGames = () => (dispatch) => {
//   // const { games } = getState();

//   // const data = {
//   //   ...games.params
//   // };

//   dispatch(getGamesStart());
//   return post({
//     url: 'https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/beatemups.json',
//     data
//   })
//     .then(response => dispatch(getGamesSuccess(response)))
//     .catch(e => {
//       dispatch(getGamesFailure(e));
//     });
// };

