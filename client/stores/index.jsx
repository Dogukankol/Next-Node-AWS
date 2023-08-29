import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import accountReducer from './Account/accountSlice'

export function createStore(preloadedState = {}) {
  const store = configureStore({
    reducer: {
      account: accountReducer,
    },
    middleware: [
      ...getDefaultMiddleware({
          serializableCheck: false
      }),
  ],
    preloadedState,
  });

  return store;
}

export const store = createStore({});
