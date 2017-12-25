import { combineReducers, Reducer } from 'redux';
import { CoureseStore } from '../store/root.store';
import { itemsReducer } from './items.reducer';
import { searchTermReducer } from './search-term.reducer';

export const rootReducer: Reducer<CoureseStore> = combineReducers({
  items: itemsReducer,
  searchTerm: searchTermReducer
});
