import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import CertificatesList from '../../ui/certificates-list/certificates-list';
import {
  setCurrentCertificate,
  setIsUploading,
  setCertificates,
} from '../../../store/certificates-slice/certificates-slice';
import { StyledCertificates, ButtonAdd, VisuallyHiddenTitle } from './styled';
import CertificateInformation from '../../ui/certificate-information/certificate-information';
import Upload from '../../ui/upload/upload';


const Certificates: FC = () => {
  const isUploading = useSelector((state: RootState) => state.certificates.isUploading);
  const dispatch = useDispatch();

  const buttonAddClickHandler = () => {
    dispatch(setIsUploading(!isUploading));
    dispatch(setCurrentCertificate(null));
  };

  useEffect(() => {
    if (localStorage.getItem('certificates')) {
      const cert = JSON.parse(localStorage.getItem('certificates')!);
      dispatch(setCertificates(cert));
    }
    if (localStorage.getItem('currentCertificate')) {
      const currentCert = JSON.parse(localStorage.getItem('currentCertificate')!);
      dispatch(setCurrentCertificate(currentCert));
    }
  }, [dispatch]);


  return (
    <>
      <VisuallyHiddenTitle>Додаток для перегляду та зберігання сертифікатів</VisuallyHiddenTitle>
      <StyledCertificates>
        <div>
          <CertificatesList />
          <ButtonAdd onClick={buttonAddClickHandler}>{isUploading ? 'Скасувати' : 'Додати'}</ButtonAdd>
        </div>
        {isUploading ? <Upload /> : <CertificateInformation />}
      </StyledCertificates>
    </>
  );
};

export default Certificates;
