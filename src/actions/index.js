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

export const fetchPostsRequest = () => {
  return {
    type: "FETCH_REQUEST"
  }
}

export const fetchPostsSuccess = payload => {
  return {
    type: "FETCH_SUCCESS",
    payload
  }
}

export const fetchPostsError = () => {
  return {
    type: "FETCH_ERROR"
  }
}
