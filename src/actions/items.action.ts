import { Action, AnyAction } from 'redux';

export const GET_ITEMS_PENDING: string = 'GET_ITEMS_PENDING';
export const GET_ITEMS_SUCCESS: string = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_ERROR: string = 'GET_ITEMS_PENDING';

// tslint:disable-next-line
export const itemsActions = {
  getItems(): Action {
    return {
      type: GET_ITEMS_PENDING
    };
  },
  onItemsSuccess<T>(payload: T): AnyAction {
    return {
      type: GET_ITEMS_SUCCESS,
      payload
    };
  }
};