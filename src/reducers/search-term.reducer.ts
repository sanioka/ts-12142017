import { UPDATE_SEARCH_TERM } from '../actions/search-term.action';
import { AnyAction } from 'redux';

export type SearchTerm = string;

export const initData: SearchTerm = '';

// tslint:disable-next-line
export const searchTermReducer =
  (state: SearchTerm = initData, action: AnyAction): SearchTerm => {
    if (action.type === UPDATE_SEARCH_TERM) {
      state = action.payload;
    }
    return state;
  };