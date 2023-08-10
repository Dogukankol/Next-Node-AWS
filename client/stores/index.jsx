import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import registerReducer from './register/registerSlice'

export function createStore(preloadedState = {}) {
  const store = configureStore({
    reducer: {
      register: registerReducer,
    },
    preloadedState,
  });

  return store;
}

export const store = createStore({});
