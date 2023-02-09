import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer from './slices/pokemonSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, pokemonReducer)


export const store = configureStore({
	reducer: {
		pokemon: persistedReducer
	},
	middleware: [thunk]
});

export const persistor = persistStore(store)