import styled from 'styled-components';

export const StyledCertificatesList = styled.ul`
  margin: 0 0 50px;
  padding: 0;
`;

export const Li = styled.li`
  list-style: none;
  border: 1px solid ${({theme}) => theme.colors.baseBlack};

  :not(:first-child) {
    border-top: none;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  text-align: center;
  margin: 0 0 50px;
`;
