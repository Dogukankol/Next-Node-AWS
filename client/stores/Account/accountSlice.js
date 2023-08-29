import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  user: [],
  responseStatus: "false"
}

export const createUser = createAsyncThunk("account/register", async (data) => {
  return await axios
    .post(`${process.env.NEXT_PUBLIC_ENV_ENDPOINT_URL}/account/register`, data)
})

export const verificationUser = createAsyncThunk("account/verification", async (data) => {
  return await axios
    .post(`${process.env.NEXT_PUBLIC_ENV_ENDPOINT_URL}/account/verification`, data)
})


export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.responseStatus = process.env.NEXT_PUBLIC_ENV_AUTH_RESPONSE_STATUS_SUCCESS
      })
      .addCase(createUser.rejected, (state, action) => {
        state.responseStatus = process.env.NEXT_PUBLIC_ENV_AUTH_RESPONSE_STATUS_ERROR

      })
  },
});

export const selectResponseStatus = (state) => state.account.responseStatus



export default accountSlice.reducer