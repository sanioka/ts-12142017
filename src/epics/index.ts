import { combineEpics } from 'redux-observable';
import { itemsEpic } from './items.epic';

// tslint:disable-next-line
export const epicMiddleware = combineEpics(
  itemsEpic
);