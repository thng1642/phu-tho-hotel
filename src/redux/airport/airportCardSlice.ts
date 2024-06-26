import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import FIREBASE from "../../app/constants";
import { collection, getDocs } from "firebase/firestore";

export interface AirportCard {
  id: string;
  author: string;
  img: string;
  dateAt: string;
  des: string;
  title: string;
}

export const fetchAirportCard = createAsyncThunk(
  "fetch/airport-card",
  async () => {
    const result = [] as AirportCard[];
    const querySnapshot = await getDocs(collection(FIREBASE, "airports"));
    querySnapshot.forEach((doc) => {
      const tmp = doc.data();
      result.push({
        id: doc.id,
        author: tmp.author,
        img: tmp.img1,
        dateAt: tmp.dateAt,
        des: tmp.des,
        title: tmp.title,
      });
    });
    return result;
  }
);

const initialState = [] as AirportCard[];

const airportCardSlice = createSlice({
  name: "airport-card",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAirportCard.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

const airportCardActions = airportCardSlice.actions;
export default airportCardActions;
export const airportCardReducers = airportCardSlice.reducer;
