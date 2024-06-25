import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { roomCardReduces } from '../redux/room/roomCardSlice';
import { relative } from 'path';
import { newsCardReducers } from '../redux/home/newsCardSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    rooms: roomCardReduces,
    relative: newsCardReducers,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
