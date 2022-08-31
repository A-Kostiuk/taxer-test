import styled from 'styled-components';

export const StyledCertificates = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;

  padding: ${({theme}) => theme.pageIndents};

  max-width: ${({theme}) => theme.maxWidth};
  margin: 0 auto;
`;

export const ButtonAdd = styled.button`
  display: block;
  margin: 0 auto;
  cursor: pointer;
  background-color: ${({theme}) => theme.colors.grey100};
  border-radius: 10px;
  padding: 5px 20px 5px;
  border: 1px solid ${({theme}) => theme.colors.baseBlack};
  min-width: 120px;
`;

export const VisuallyHiddenTitle = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
`
