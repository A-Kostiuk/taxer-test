import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import * as x509 from '@peculiar/x509';
import { encode } from 'base64-arraybuffer';
import { Certificate } from '../../../interfaces/certificate';
import { useDispatch } from 'react-redux';
import {
  addCertificate,
  setCurrentCertificate,
  setIsUploading,
} from '../../../store/certificates-slice/certificates-slice';
import { AdditionalText } from '../additional-text/additional-text';
import { CERTIFICATE_TYPE } from '../../../const';
// @ts-ignore
import uniqid from 'uniqid';
import { DropArea } from './styled';

function Upload() {
  const dispatch = useDispatch();
  const onDrop = useCallback((acceptedFiles: Blob[]) => {
    acceptedFiles.forEach((file, index, array) => {
      try {
        if (file.type !== CERTIFICATE_TYPE) {
          throw new Error('Неправильний формат сертифікату ' + file.type);
        }
        const reader = new FileReader();
        reader.onload = (evt: any): void => {

          try {
            const base64 = encode(evt.target.result);
            const parseCert = new x509.X509Certificate(base64);

            const getProperty = (row: string): string => {
              const start = 'CN=';
              const arr = row.split(',');
              for (const str of arr) {
                if (str.includes(start)) {
                  return str.slice(4).replaceAll('\\', '');
                }
              }
              return 'Інформація відсутня';
            };

            const certificate: Certificate = {
              commonName: getProperty(parseCert.subject),
              issuerCN: getProperty(parseCert.issuer),
              validFrom: parseCert.notBefore,
              validTill: parseCert.notAfter,
              id: uniqid(),
            };
            dispatch(addCertificate(certificate));
            if (array.length - 1 === index) {
              dispatch(setIsUploading(false));
              dispatch(setCurrentCertificate(certificate));
            }
          } catch (e: any) {
            console.log('Щось пішло не так з файлом', file, e);
          }

        };
        reader.readAsArrayBuffer(file);
      } catch (e) {
        console.log(e);
      }

    });

  }, [dispatch]);
  const {getRootProps, getInputProps} = useDropzone({onDrop});

  return (
    <DropArea {...getRootProps()}>
      <input {...getInputProps()} />
      <AdditionalText>Перетягніть файл сертифікату в поле</AdditionalText>
    </DropArea>
  );
}

export default Upload;
