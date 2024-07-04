import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import FIREBASE from "../../app/constants";
import { collection, getDocs, query, where } from "firebase/firestore";

interface InitialState {
  slides: string[];
  descriptions: string[];
  benefits: string[];
  icons: string[];
}

const initialState: InitialState = {
  slides: [],
  descriptions: [],
  benefits: [],
  icons: [],
};
export const fetchingDetailRoom = createAsyncThunk(
  "fetch/detail-room",
  async (roomId: string) => {
    const descriptions = [] as string[];
    const listBenefit = [] as string[];
    const querySnapshot = await getDocs(
      query(collection(FIREBASE, "details-room"), where("roomId", "==", roomId))
    );
    querySnapshot.forEach((doc) => {
      descriptions.push(...doc.data().detail);
      listBenefit.push(...doc.data().opt);
    });
    return {
      descriptions,
      listBenefit,
    };
  }
);
const detailRoomSlice = createSlice({
  name: "detail-room",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchingDetailRoom.rejected, (state, action) => {
      console.log("Error when call api");
      return;
    });
    builder.addCase(fetchingDetailRoom.fulfilled, (state, action) => {
      const n = action.payload.listBenefit.length;
      const content = [] as string[];
      const icons = [] as string[];
      for (let i = 0; i < n; i += 2) {
        content.push(action.payload.listBenefit[i]);
        icons.push(action.payload.listBenefit[i + 1]);
      }
      return {
        ...state,
        descriptions: action.payload.descriptions,
        icons,
        benefits: content,
      };
    });
  },
});

const detailRoomActions = detailRoomSlice.actions;
export default detailRoomActions;
export const detailRoomReducers = detailRoomSlice.reducer;
