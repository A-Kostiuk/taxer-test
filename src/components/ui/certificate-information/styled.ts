import styled from 'styled-components';

export const Text = styled.p`
  margin: 0 0 10px;

  :last-child {
    margin-bottom: 0;
  }
`;

export const ViewWindow = styled.div`
  padding: 5px;
  border: 1px solid ${({theme}) => theme.colors.baseBlack};
  width: 100%;
  height: 100%;
  height: ${({theme}) => theme.viewWindowHeight};
`;
