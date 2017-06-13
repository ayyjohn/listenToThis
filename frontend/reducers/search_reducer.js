import { merge } from 'lodash';
import { RECEIVE_SEARCHPARAM } from '../actions/search_actions';

const SearchReducer = (state = {}, action) => {
  Object.freze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_SEARCHTERM:
      newState = merge({}, newState, action.searchParam);
      return newState;
    default:
      return newState;
  }
}
