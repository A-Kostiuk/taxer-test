import styled from 'styled-components';

export const DropArea = styled.div`
  width: 100%;
  border: 1px dashed ${({theme}) => theme.colors.baseBlack};
  padding: 5px;
  cursor: pointer;
  height: ${({theme}) => theme.viewWindowHeight};
`;
