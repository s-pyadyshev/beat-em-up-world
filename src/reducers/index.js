import filterPlayers from './filterPlayers';
import { combineReducers } from 'redux';

// const reducers = (state = {}, action) => {
//     switch (action.type) {
//       case 'FILTER_PLAYERS':
//         return state + 1;
//       default:
//         return state;
//     }
// };

// export default reducers;

const reducers = combineReducers({
  filterPlayers
});

export default reducers;
