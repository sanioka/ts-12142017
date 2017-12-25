import { ActionsObservable } from 'redux-observable';
import { Action } from 'redux';
import { GET_ITEMS_ERROR, GET_ITEMS_PENDING, GET_ITEMS_SUCCESS } from '../actions/items.action';
import { Observable } from 'rxjs/Observable';
import { api } from '../services/api-call.service';
import { AxiosResponse } from 'axios';
import { Item } from '../reducers/items.reducer';


import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/fromPromise';

// tslint:disable-next-line
export const itemsEpic: (action$: ActionsObservable<Action>) => any =
  (action$: ActionsObservable<Action>) => {
    return action$
      .ofType(GET_ITEMS_PENDING)
      .switchMap(() => Observable
        .fromPromise(api.getItems('1y2zyut'))
        .map((items: AxiosResponse<Item[]>) => {
          return {
            type: GET_ITEMS_SUCCESS,
            payload: items.data
          };
        })
        .catch((err: { message: string }) => {
          return [
            {
              type: GET_ITEMS_ERROR,
              payload: { err: err.message }
            }
          ];
        })
      );
  };