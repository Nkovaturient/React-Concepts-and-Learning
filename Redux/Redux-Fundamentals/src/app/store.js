import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice.js';

//Deesigning the store-[will pass reducer at the end]
export const store = configureStore({ 
  reducer: todoReducer //passing all our reducers as obj
});