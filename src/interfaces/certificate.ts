export interface Certificate {
  commonName: string;
  issuerCN: string;
  validFrom: Date;
  validTill: Date;
  id: string;
}
