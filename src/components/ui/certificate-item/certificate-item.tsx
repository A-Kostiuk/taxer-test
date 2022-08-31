import React, { FC } from 'react';
import { Button } from './styled';
import { Certificate } from '../../../interfaces/certificate';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCertificate } from '../../../store/certificates-slice/certificates-slice';
import { RootState } from '../../../store';

interface Props {
  certificate: Certificate;
}


const CertificateItem: FC<Props> = ({certificate}) => {
  const isUploading = useSelector((state: RootState) => state.certificates.isUploading);
  const currentCertificate = useSelector((state: RootState) => state.certificates.currentCertificate);
  const dispatch = useDispatch();
  const buttonClickHandler = () => {
    dispatch(setCurrentCertificate(certificate));
  };

  const isActive = (): boolean => {
    return certificate.id === currentCertificate?.id;
  };

  return (
    <Button onClick={buttonClickHandler} disabled={isUploading || isActive()} $isActive={isActive()}>
      {certificate.commonName}
    </Button>
  );
};

export default CertificateItem;
