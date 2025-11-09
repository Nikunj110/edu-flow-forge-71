import { createSlice } from '@reduxjs/toolkit';

interface StudentState {
  studentsList: any[];
  loading: boolean;
  error: any;
  response: any;
  statestatus: string;
}

const initialState: StudentState = {
  studentsList: [],
  loading: false,
  error: null,
  response: null,
  statestatus: 'idle',
};

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    // Add reducers as needed for your backend implementation
  },
});

export default studentSlice.reducer;
