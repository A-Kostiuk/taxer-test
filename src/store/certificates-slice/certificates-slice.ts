import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Certificate } from '../../interfaces/certificate';

interface ICertificates {
  certificates: Certificate[];
  currentCertificate: Certificate | null;
  isUploading: boolean;
}

const initialState: ICertificates = {
  certificates: [],
  currentCertificate: null,
  isUploading: false,
};

const certificatesSlice = createSlice({
  name: 'certificates',
  initialState,
  reducers: {
    setCurrentCertificate(state, action: PayloadAction<Certificate | null>) {
      state.currentCertificate = action.payload;
      localStorage.setItem('currentCertificate', JSON.stringify(action.payload));
    },
    setIsUploading(state, action: PayloadAction<boolean>) {
      state.isUploading = action.payload;
    },
    addCertificate(state, action: PayloadAction<Certificate>) {
      state.certificates.push(action.payload);
      localStorage.setItem('certificates', JSON.stringify(state.certificates));
    },
    setCertificates(state, action: PayloadAction<Certificate[]>) {
      state.certificates = action.payload;
    },
  },
});


export const {setCurrentCertificate, setIsUploading, addCertificate, setCertificates} = certificatesSlice.actions;
export default certificatesSlice.reducer;
