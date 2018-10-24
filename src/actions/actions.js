const FILTER_PLAYERS = 'FILTER_PLAYERS';

// action creators
export const filterPlayers = players => {
    return { // action
        type: FILTER_PLAYERS,
        payload: {
            players,
        },
    }
}

export const fetchGamesRequest = () => {
    return {
      type: "FETCH_REQUEST"
    }
  }
  
  export const fetchGamesSuccess = payload => {
    return {
      type: "FETCH_SUCCESS",
      payload
    }
  }
  
  export const fetchGamesError = () => {
    return {
      type: "FETCH_ERROR"
    }
  }
