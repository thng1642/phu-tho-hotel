import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import FIREBASE from "../../app/constants";

export interface Massage {
  id: string;
  name: string;
  description: string;
  img: string;
  imgDes: string[];
  badRoom: string;
  imgBadRoom: string[];
}
export const fetchMassageCard = createAsyncThunk(
  "/fetch/massage-card",
  async () => {
    const result = [] as Massage[];
    const querySnapshot = await getDocs(collection(FIREBASE, "massages"));
    querySnapshot.forEach((doc) => {
      result.push({
        id: doc.id,
        name: doc.data().name,
        description: doc.data().des,
        img: doc.data().img,
        imgDes: [],
        badRoom: "",
        imgBadRoom: [],
      });
    });
    return result;
  }
);
const initialState = [] as Massage[];
const massageCardSlice = createSlice({
  name: "massage-card",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMassageCard.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

const massageCardActions = massageCardSlice.actions;
export default massageCardActions;
export const massageCardReducer = massageCardSlice.reducer;
