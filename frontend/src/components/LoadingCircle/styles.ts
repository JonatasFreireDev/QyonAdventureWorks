import styled from 'styled-components';
import { rotate } from '../../styles/keyframes';

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: grey;
  margin: auto;
  font-size: 40px;
  height: 100%;
  
  svg {
    animation: ${rotate} 1s linear infinite;
  }
`;

export default Loader;