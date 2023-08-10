import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  user: [],
}

export const createUser = createAsyncThunk("register/user", async (data) => {
  console.log(data)
  axios
    .post(`${process.env.NEXT_PUBLIC_ENV_ENDPOINT_URL}/register`, data)
    .then(response => console.log(response))
    .catch(error => console.error(error));
})

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.user = action.payload
    });
  },
})


export default registerSlice.reducer