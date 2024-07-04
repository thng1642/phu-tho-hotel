import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import FIREBASE from "../../app/constants";
import { collection, getDocs, query, where } from "firebase/firestore";

export interface Feedback {
  roomId: string;
  content: string;
  dateAt: string;
  author: string;
}
const initialState = [] as Feedback[];

export const fetchFeedback = createAsyncThunk(
  "/fetch/feedback",
  async (roomId: string = "xq7i2X2INpk5sFaHskcg") => {
    const result = [] as Feedback[];
    const querySnapshot = await getDocs(
      query(collection(FIREBASE, "comment"), where("roomId", "==", roomId))
    );

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      result.push({
        roomId: roomId,
        content: doc.data().content,
        dateAt: doc.data().dateAt,
        author: doc.data().author,
      });
    });

    return result;
  }
);
const feedbackRoomSlice = createSlice({
  name: "feedback-room",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFeedback.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

const feedbackActions = feedbackRoomSlice.actions;
export default feedbackActions;
export const feedbackReducers = feedbackRoomSlice.reducer;
