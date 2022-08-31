import React, { FC } from 'react';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { AdditionalText } from '../additional-text/additional-text';
import { Text, ViewWindow } from './styled';

const CertificateInformation: FC = () => {
  const certificate = useSelector((state: RootState) => state.certificates.currentCertificate);
  return (<ViewWindow>
      {certificate ?
        <>
          <Text>Common Name: {certificate.commonName}</Text>
          <Text>Issuer SN: {certificate.issuerCN}</Text>
          <Text>Valid From: {dayjs(certificate.validFrom).format('DD-MM-YYYY')}</Text>
          <Text>Valid Till: {dayjs(certificate.validTill).format('DD-MM-YYYY')}</Text>
        </>
        : <AdditionalText>Виберіть сертифікат щоб переглянути інформацію</AdditionalText>}
    </ViewWindow>
  );
};

export default CertificateInformation;
