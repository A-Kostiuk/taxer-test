import React, { FC } from 'react';
import { Li, StyledCertificatesList, Text } from './styled';
import CertificateItem from '../certificate-item/certificate-item';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

const CertificatesList: FC = () => {
  const certificates = useSelector((state: RootState) => state.certificates.certificates);

  return (
    <>
      {certificates.length ?
        <StyledCertificatesList>
          {certificates.map((certificate) => <Li key={certificate.id}>
            <CertificateItem certificate={certificate} />
          </Li>)}
        </StyledCertificatesList>
        : <Text>Сертифікати відсутні</Text>}
    </>
  );
};

export default CertificatesList;
