import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userRelated/userSlice';
import sclassReducer from './sclassRelated/sclassSlice';
import studentReducer from './studentRelated/studentSlice';
import noticeReducer from './noticeRelated/noticeSlice';
import complainReducer from './complainRelated/complainSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    sclass: sclassReducer,
    student: studentReducer,
    notice: noticeReducer,
    complain: complainReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
