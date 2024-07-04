import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { roomCardReduces } from "../redux/room/roomCardSlice";
import { relative } from "path";
import { newsCardReducers } from "../redux/home/newsCardSlice";
import { feedbackReducers } from "../redux/room/feebackRoomSlice";
import { airportCardReducers } from "../redux/airport/airportCardSlice";
import { detailRoomReducers } from "../redux/room/detailRoomSlice";
import { massageCardReducer } from "../redux/home/massageCardSlice";

export const store = configureStore({
  reducer: {
    rooms: roomCardReduces,
    relative: newsCardReducers,
    feedbackRoom: feedbackReducers,
    airportCard: airportCardReducers,
    detailRoom: detailRoomReducers,
    massageCard: massageCardReducer,
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
