import { configureStore } from '@reduxjs/toolkit';
import cart from './slices/cartSlice';
import filter from './slices/filterSlice';
import items from './slices/itemsSlice';

export const store = configureStore({
  reducer: { filter, items, cart },
});