import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  user: [],
  existsUser: false,
}

export const createUser = createAsyncThunk("register/user", async (data) => {
  return await axios
    .post(`${process.env.NEXT_PUBLIC_ENV_ENDPOINT_URL}/register`, data)
    .then(response => console.log(response))
    // .catch(error => console.error(error.response.data.error));
})

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.existsUser = true
        console.log(state.existsUser)
      })
  },
});

export const selectCount = (state) => state.counter.value



export default registerSlice.reducer