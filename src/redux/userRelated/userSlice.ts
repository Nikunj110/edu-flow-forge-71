import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  status: string;
  currentUser: any;
  currentRole: string;
  response: string;
  error: string;
}

const initialState: UserState = {
  status: 'idle',
  currentUser: null,
  currentRole: '',
  response: '',
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authLogout: (state) => {
      state.currentUser = null;
      state.currentRole = '';
      state.status = 'idle';
    },
    loginSuccess: (state, action) => {
      state.currentUser = action.payload.user;
      state.currentRole = action.payload.role;
      state.status = 'success';
    },
    loginFailed: (state, action) => {
      state.status = 'failed';
      state.response = action.payload;
    },
    loginError: (state) => {
      state.status = 'error';
    },
  },
});

export const { authLogout, loginSuccess, loginFailed, loginError } = userSlice.actions;
export default userSlice.reducer;
