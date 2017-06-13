import { merge } from 'lodash';
import { RECEIVE_SEARCHPARAM } from '../actions/search_actions';

const SearchReducer = (state = "", action) => {
  Object.freeze(state);
  let newState = state;
  switch(action.type) {
    case RECEIVE_SEARCHPARAM:
      newState = action.searchParam;
      return newState;
    default:
      return newState;
  }
};

export default SearchReducer;
