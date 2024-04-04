import {combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import savedListingReducer from './savedListing/savedListingSlice'; // Import the new savedListingSlice


import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({ user: userReducer,savedListing: savedListingReducer });

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);