import { applyMiddleware, compose, createStore, Store } from 'redux';
import { Item } from '../reducers/items.reducer';
import { SearchTerm } from '../reducers/search-term.reducer';
import { rootReducer } from '../reducers/index';
import { createEpicMiddleware } from 'redux-observable';
import { epicMiddleware } from '../epics/index';

declare const __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (arg: { name: string }) => typeof compose;

export type CoureseStore = {
  items: Item[],
  searchTerm: SearchTerm
};

// tslint:disable-next-line
const rootEpicsMiddlaware = createEpicMiddleware(epicMiddleware);

const initStore: () => Store<CoureseStore> = () => {
  const composeEnchancer: typeof compose =
    typeof window === 'object' && __REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? __REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'Typescript course module'
      })
      : compose;
  return createStore<CoureseStore>(
    rootReducer,
    composeEnchancer(applyMiddleware(rootEpicsMiddlaware))
  );
};

export const store: Store<CoureseStore> = initStore();