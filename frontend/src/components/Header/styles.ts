import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.theme.secondTheme};
  color: ${props => props.theme.text.grey};
  padding: 20px;
  margin-left: 80px;
  margin-bottom: 50px;

  h1{
    font-weight: bold;
  }
`;