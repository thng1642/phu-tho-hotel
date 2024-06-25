import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwCp2LFwDIH2Td2oJGz8LbAJIdUn6R8pQ",
  authDomain: "alta-875f0.firebaseapp.com",
  projectId: "alta-875f0",
  storageBucket: "alta-875f0.appspot.com",
  messagingSenderId: "495904334112",
  appId: "1:495904334112:web:ad998e144ec6c657b13745",
  measurementId: "G-7QPJ6QFYHK",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const initialState = [] as any;

export const fetchRoom = createAsyncThunk("fetchRoom", async (thunkApi) => {
  const querySnapshot = await getDocs(collection(db, "rooms"));
  const listRoom = [] as any[];
  querySnapshot.forEach((doc) => {
    listRoom.push({
      ...doc.data(), 
      id: doc.id
    })
  })
  return listRoom
});
const roomCardSlice = createSlice({
  name: "room-card",
  initialState,
  reducers: {
    testReducer() {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRoom.fulfilled, (state, action) => {
        let n = action.payload.length
        const result = [] as any[]
        for (let i = 0; i < n; i++) {
          result.push(action.payload[i])
        }
        return result
    });
    builder.addCase(fetchRoom.rejected, (state, action) => {
      console.log(action.error.message);
    });
  },
});
const roomCardActions = roomCardSlice.actions;
export default roomCardActions;
export const roomCardReduces = roomCardSlice.reducer;
