import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  status: string;
  currentUser: any;
  currentRole: string;
  response: string;
  error: string;
  userDetails: any;
  loading: boolean;
}

const initialState: UserState = {
  status: 'idle',
  currentUser: null,
  currentRole: '',
  response: '',
  error: '',
  userDetails: null,
  loading: false,
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

// Additional action for compatibility
export const underControl = () => ({ type: 'user/underControl' });

export default userSlice.reducer;
