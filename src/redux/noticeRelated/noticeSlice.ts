import { createSlice } from '@reduxjs/toolkit';

interface NoticeState {
  noticesList: any[];
  loading: boolean;
  error: any;
  response: any;
}

const initialState: NoticeState = {
  noticesList: [],
  loading: false,
  error: null,
  response: null,
};

const noticeSlice = createSlice({
  name: 'notice',
  initialState,
  reducers: {
    // Add reducers as needed for your backend implementation
  },
});

export default noticeSlice.reducer;
