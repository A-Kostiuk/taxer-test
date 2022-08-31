import styled, { css } from 'styled-components';

interface IButton {
  $isActive: boolean;
}

export const Button = styled.button<IButton>`
  position: relative;
  width: 100%;
  border: none;
  text-align: left;
  background-color: ${({theme}) => theme.colors.baseWhite};
  cursor: pointer;
  padding: 3px 5px;
  color: ${({theme}) => theme.colors.baseBlack};

  ${props => props.$isActive ? css`
    background-color: ${props.theme.colors.grey100};
    cursor: auto;

    ::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 448'%3E%3Cpath fill-rule='evenodd' d='m96 88 144 144L96 376z'/%3E%3C/svg%3E%0A");
      background-repeat: no-repeat;
      right: 0;
      top: 3px;
    }
  ` : null}
  :disabled {
    cursor: auto;
  }
`;
