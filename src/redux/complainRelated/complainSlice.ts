import { createSlice } from '@reduxjs/toolkit';

interface ComplainState {
  complainsList: any[];
  loading: boolean;
  error: any;
  response: any;
}

const initialState: ComplainState = {
  complainsList: [],
  loading: false,
  error: null,
  response: null,
};

const complainSlice = createSlice({
  name: 'complain',
  initialState,
  reducers: {
    // Add reducers as needed for your backend implementation
  },
});

export default complainSlice.reducer;
