import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage"; 
import contactsReducer from "./contactsSlice"; 
import filtersReducer from "./filtersSlice"; 
import initialContacts from "../data/initialContacts.json"; 

const contactsPersistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"], 
};

const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer
);

const initialState = {
  contacts: {
    items: initialContacts,
  },
  filters: {
    name: "",
  },
};


export const store = configureStore({
  reducer:
  
    {
      contacts: persistedContactsReducer, 
      filters: filtersReducer, 
    },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  
  preloadedState: initialState, 
});

export const persistor = persistStore(store);
