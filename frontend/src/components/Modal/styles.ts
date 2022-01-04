import styled from 'styled-components';
import { appearFromTop, appearFromNothing } from '../../styles/keyframes';

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  height: 100vh;
  width: 100vw;
  animation: ${appearFromNothing} 0.3s;
`;

export const Content = styled.section`
  position: absolute;
  background: white;
  border-radius: 10px;
  opacity: 1 !important;
  min-height: 200px;
  width: 80%;
  max-width: 800px;
  animation: ${appearFromTop} 0.5s;
`;