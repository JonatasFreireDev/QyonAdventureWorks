import styled, { css } from 'styled-components';

interface InputStatus {
  hasValue: boolean;
  hasError?: boolean;
}

export const Container = styled.div<InputStatus>`
  position: relative;
  width: 100%;
  margin: 10px 0;
  label {
    color: ${props => props.theme.input.normal};
  }
  input {
    padding: 0 5px;
    margin-top: 5px;
    height: 40px;
    border: 1px solid ${props => props.theme.input.normal};
    background-color: transparent;
    color: ${props => props.theme.input.textColor};
    width: 100%;
    transition: all 0.3s;
    &::placeholder {
      color: ${props => props.theme.input.placeholder};
    }
    ${props =>
      props.hasValue &&
      css`
        border: 1px solid ${props.theme.input.active};
        & ~ label {
          color: ${props.theme.input.active};
        }
      `}
    ${props =>
      props.hasError &&
      css`
        border: 1px solid ${props.theme.input.error};
        & ~ label {
          color: ${props.theme.input.error};
      `}
    &:focus ~ label {
      color: ${props => props.theme.input.active};
    }
    &:focus {
      border: 1px solid ${props => props.theme.input.active};
    }
  }
  small {
    display: ${props => (props.hasError ? 'block' : 'none')};
    position: absolute;
    margin: 5px;
    right: 0px;
    color: ${props => props.theme.input.error};
  }
`;