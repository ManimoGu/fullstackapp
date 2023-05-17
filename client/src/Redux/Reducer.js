import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("Users/getUsers", async () => {
  return axios
    .get("http://localhost:9000/listUsers")

    .then((res) => {
      return res.data
    })
    .catch((err) => console.log(err));
});

const UserSlice = createSlice({
  name: "Users",
  initialState: {
    users: [],
    status : ""
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state,action) => {
       
        state.users = action.payload
        state.status = "Accepted"

    })
    .addCase(getUsers.rejected, (state)=>{
      state.status = "Rejected"
    })
    .addCase(getUsers.pending, (state)=>{
        state.status = "Pending"
    })
    ;
  },
});

export default UserSlice.reducer;
