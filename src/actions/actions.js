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
