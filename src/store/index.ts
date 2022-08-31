import { configureStore } from '@reduxjs/toolkit';
import certificatesReducer from './certificates-slice/certificates-slice';

export const store = configureStore({
  reducer: {
    certificates: certificatesReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof store.getState>

export default store;
