import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import FIREBASE from "../../app/constants";
import { News } from "../../page/home/Home";

export const fetchRelative = createAsyncThunk(
  "/api/fetchRelative",
  async () => {
    const querySnapshot = await getDocs(collection(FIREBASE, "news"));
    const listNews = [] as News[];
    querySnapshot.forEach((doc) => {
      listNews.push({
        ...(doc.data() as News),
        id: doc.id,
      });
    });
    return listNews;
  }
);
export const fetchNewsTag = createAsyncThunk("api/fetch/tag", async () => {
  const querySnapshot = await getDocs(collection(FIREBASE, "breakfast"));
  const listTags = [] as News[];
  querySnapshot.forEach((doc) => {
    listTags.push({
      id: doc.id,
      author: doc.data().author,
      dateAt: doc.data().dateAt,
      img1: doc.data().img1,
      "short-des": doc.data().des,
      title: doc.data().title,
      tag: doc.data().tag,
    });
  });
  return listTags;
});
const initialState = [] as News[];

const newsCardSlice = createSlice({
  name: "relative-card",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRelative.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchNewsTag.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
const newsCardActions = newsCardSlice.actions;
export default newsCardActions;
export const newsCardReducers = newsCardSlice.reducer;
