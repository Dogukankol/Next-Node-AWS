import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { authenticate } from "@/helpers/auth";


const initialState = {
  msgSuccess: "",
  msgError: "",
  isLogin: false,
}

export const createUser = createAsyncThunk("account/register", async (data, {rejectWithValue}) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_ENV_ENDPOINT_URL}/account/register`, data)
    return response;
  } catch (error) {
    return rejectWithValue(error.response)    
  }
})

export const verificationUser = createAsyncThunk("account/verification", async (data, {rejectWithValue}) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_ENV_ENDPOINT_URL}/account/verification`, data)
    return response;
  } catch (error) {
    return rejectWithValue(error.response)    
  }
})

export const login = createAsyncThunk("account/login", async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_ENV_ENDPOINT_URL}/account/login`, data);
    return response;
  } catch (error) {
    return rejectWithValue(error.response)
  }


})


export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setLoginState: (state, action) => {
      state.isLogin = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        state.msgSuccess = action.payload.data.success
      })
      .addCase(createUser.rejected, (state, action) => {
        state.msgError = action.payload.data.error
      })
      .addCase(login.fulfilled, (state, action) => {
        state.msgSuccess = action.payload.data.success;
        state.isLogin = true
        authenticate(action.payload);
      })
      .addCase(login.rejected, (state, action) => {
        state.msgError = action.payload.data.error
      })
  },
});

export const { setLoginState } = accountSlice.actions

export const selectMsgSuccess = (state) => state.account.msgSuccess;
export const selectMsgError = (state) => state.account.msgError;
export const selectIsLogin = (state) => state.account.isLogin


export default accountSlice.reducer