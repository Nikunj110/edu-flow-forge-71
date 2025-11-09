import { createSlice } from '@reduxjs/toolkit';

interface TeacherState {
  teachersList: any[];
  teacherDetails: any;
  loading: boolean;
  error: any;
  response: any;
}

const initialState: TeacherState = {
  teachersList: [],
  teacherDetails: null,
  loading: false,
  error: null,
  response: null,
};

const teacherSlice = createSlice({
  name: 'teacher',
  initialState,
  reducers: {
    // Add reducers as needed for your backend implementation
  },
});

export default teacherSlice.reducer;
