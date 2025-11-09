import { createSlice } from '@reduxjs/toolkit';

interface SclassState {
  subjectsList: any[];
  sclassesList: any[];
  sclassStudents: any[];
  sclassDetails: any;
  subjectDetails: any;
  loading: boolean;
  subloading: boolean;
  error: any;
  response: any;
  getresponse: any;
}

const initialState: SclassState = {
  subjectsList: [],
  sclassesList: [],
  sclassStudents: [],
  sclassDetails: null,
  subjectDetails: null,
  loading: false,
  subloading: false,
  error: null,
  response: null,
  getresponse: null,
};

const sclassSlice = createSlice({
  name: 'sclass',
  initialState,
  reducers: {
    // Add reducers as needed for your backend implementation
  },
});

export default sclassSlice.reducer;
