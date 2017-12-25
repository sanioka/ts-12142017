import { GET_ITEMS_SUCCESS } from '../actions/items.action';
import { AnyAction } from 'redux';

export type Item = {
  profileName: string;
  firstName: string;
  surname: string;
  photo: string;
  country: string;
};

export const initData: Item[] = [];

// tslint:disable-next-line
export const itemsReducer =
  (state: Item[] = initData, action: AnyAction): Item[] => {
    if (action.type === GET_ITEMS_SUCCESS) {
      state = [...action.payload];
    }
    return state;
  };